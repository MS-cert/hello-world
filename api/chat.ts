import { createLovableAiGatewayProvider } from "../src/lib/ai-gateway.server";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { COURSES } from "../src/data/courses";

export const config = { runtime: "edge" };

const CATALOGUE_SUMMARY = COURSES.map(
  (c) => `- ${c.title} — ${c.provider} · ${c.category} · ${c.level} · ${c.duration} · ${c.cost}`,
).join("\n");

const SYSTEM_PROMPT = `You are the FreeCertHub assistant, a friendly guide that helps people find and complete free online courses that award certificates.

You can:
- Recommend courses from the FreeCertHub catalogue below.
- Explain how to enroll, complete quizzes, and download or share the certificate on LinkedIn.
- Answer general questions about careers, learning paths, and study tips.
- Compare providers (Google, HubSpot, Cisco, IBM, Microsoft, Meta, AWS, freeCodeCamp, Kaggle, Coursera, edX, etc.).

Guidelines:
- Be concise and warm. Use short markdown lists when recommending 2+ courses.
- Prefer courses from the catalogue when the user's goal matches. Mention provider and duration.
- If a topic is not in the catalogue, suggest the closest match plus a general study tip.
- Never invent certificates that don't exist. If unsure, say so and suggest checking the provider site.

FreeCertHub catalogue (${COURSES.length} courses):
${CATALOGUE_SUMMARY}`;

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { messages } = (await req.json()) as { messages?: unknown };
  if (!Array.isArray(messages)) {
    return new Response("Messages are required", { status: 400 });
  }

  const key = process.env.LOVABLE_API_KEY;
  if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

  const gateway = createLovableAiGatewayProvider(key);
  const result = streamText({
    model: gateway("google/gemini-3-flash-preview"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages as UIMessage[]),
  });

  return result.toUIMessageStreamResponse({
    originalMessages: messages as UIMessage[],
  });
}
