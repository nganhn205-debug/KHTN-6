import fs from "fs";
import path from "path";

export type KnowledgeItem = {
  fileName: string;
  title: string;
  content: string;
};

export type SearchResult = KnowledgeItem & {
  score: number;
  matchedKeywords: string[];
};

const STOP_WORDS = ["la", "gi", "vi", "sao", "tai", "nhu", "the", "nao", "cua", "va", "co", "khong", "cho", "em", "hoi"];

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getKeywords(question: string) {
  return normalizeText(question)
    .split(" ")
    .filter((word) => word.length >= 3)
    .filter((word) => !STOP_WORDS.includes(word));
}

export function getKnowledgeBase(): KnowledgeItem[] {
  const dataDir = path.join(process.cwd(), "data");

  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files.map((fileName) => {
    const filePath = path.join(dataDir, fileName);
    const content = fs.readFileSync(filePath, "utf-8");

    const title =
      content.match(/^#\s(.+)$/m)?.[1] || fileName.replace(".md", "");

    return { fileName, title, content };
  });
}

export function searchKnowledge(question: string): SearchResult[] {
  const knowledgeBase = getKnowledgeBase();
  const keywords = getKeywords(question);

  if (keywords.length === 0) return [];

  return knowledgeBase
    .map((item) => {
      const normalizedContent = normalizeText(item.content);
      const normalizedTitle = normalizeText(item.title);

      const matchedKeywords = keywords.filter(
        (keyword) =>
          normalizedContent.includes(keyword) ||
          normalizedTitle.includes(keyword)
      );

      let score = 0;

      for (const keyword of keywords) {
        if (normalizedTitle.includes(keyword)) score += 5;
        if (normalizedContent.includes(keyword)) score += 1;
      }

      return { ...item, score, matchedKeywords };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function createAnswer(question: string) {
  const q = normalizeText(question);
  const results = searchKnowledge(question);

  if (results.length === 0) {
    return {
      answer:
        "Câu hỏi này nằm ngoài phạm vi chủ đề đang học. Em hãy hỏi về các bài Chất và sự biến đổi của chất nhé.",
      sources: [],
    };
  }

  let bestResult = results[0];

  if (q.includes("chat la gi") || q === "chat") {
    const bai9 = getKnowledgeBase().find((item) => item.fileName === "bai9.md");
    if (bai9) bestResult = { ...bai9, score: 100, matchedKeywords: ["chat"] };
  }

  const lines = bestResult.content
    .replace(/#/g, "")
    .replace(/\*\*/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questionWords = q.split(" ").filter((w) => w.length >= 3);

  const matchedLines = lines.filter((line) => {
    const n = normalizeText(line);
    return questionWords.some((word) => n.includes(word));
  });

  const selectedLines =
    matchedLines.length > 0 ? matchedLines.slice(0, 5) : lines.slice(0, 5);

  return {
    answer:
      `Dựa theo ${bestResult.title}, cô trả lời ngắn gọn như sau:\n\n` +
      selectedLines.join("\n") +
      `\n\nEm có thể hỏi tiếp: "Cho ví dụ" hoặc "Giải thích dễ hiểu hơn".`,
    sources: [
      {
        fileName: bestResult.fileName,
        title: bestResult.title,
      },
    ],
  };
}