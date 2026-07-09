import { NextRequest, NextResponse } from "next/server";
import { callHomeAssistantService } from "@/lib/home-assistant";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const domain = typeof body.domain === "string" ? body.domain : "mock";
  const service = typeof body.service === "string" ? body.service : "noop";
  const data = typeof body.data === "object" && body.data !== null ? body.data : {};
  const result = await callHomeAssistantService(domain, service, data as Record<string, unknown>);
  return NextResponse.json(result);
}
