import { NextRequest, NextResponse } from "next/server";
import { callAiProvider } from "@/lib/ai";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const message = typeof body.message === "string" ? body.message : "";
  if (!message.trim()) return NextResponse.json({ error: "message is required" }, { status: 400 });
  const reply = await callAiProvider(message, "mock");
  return NextResponse.json({ reply, provider: "mock" });
}
