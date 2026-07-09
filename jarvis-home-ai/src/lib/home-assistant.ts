export async function callHomeAssistantService(domain: string, service: string, data: Record<string, unknown>) {
  // Future Home Assistant connection point.
  // Use HOME_ASSISTANT_URL and HOME_ASSISTANT_TOKEN server-side only.
  // Example endpoint: POST /api/services/light/turn_on
  return { ok: true, domain, service, data, mode: "mock" };
}
