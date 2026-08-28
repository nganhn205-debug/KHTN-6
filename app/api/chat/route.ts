import { createAnswer } from "@/lib/knowledge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const lastMessage =
      messages[messages.length - 1]?.content || "";

    const result = createAnswer(lastMessage);

    return new Response(result.answer, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      "Xin lỗi, đã xảy ra lỗi.",
      {
        status: 500,
      }
    );
  }
}