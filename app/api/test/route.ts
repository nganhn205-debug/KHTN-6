import { getKnowledgeBase } from "@/lib/knowledge";

export async function GET() {
  const data = getKnowledgeBase();

  return Response.json(data);
}
