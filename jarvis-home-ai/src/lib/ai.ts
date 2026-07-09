export type JarvisProvider = "mock" | "openai" | "ollama" | "n8n";

export async function runJarvisCommand(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("prodrop")) return "I’ll route this to ProDrop HQ, mark it as a next action, and prepare it for a future Airtable/Supabase write.";
  if (lower.includes("plan my week")) return "Weekly plan: protect deep work, review ProDrop, organize TFF footage, run one career move, and do one finance/real-estate review.";
  if (lower.includes("reminder")) return "Reminder captured in mock mode. Once n8n or a calendar API is connected, this can become a scheduled automation.";
  if (lower.includes("home") || lower.includes("lights") || lower.includes("thermostat")) return "Home command detected. This will route to Home Assistant once HOME_ASSISTANT_URL and HOME_ASSISTANT_TOKEN are configured server-side.";
  if (lower.includes("summarize")) return "Summary mode ready. Future version will pull notes, tasks, calendar, Gmail, and project memory before responding.";
  return "Jarvis received the command. Mock mode is active, but the routing layer is ready for OpenAI, Ollama, n8n, Supabase, and Home Assistant.";
}

export async function callAiProvider(message: string, provider: JarvisProvider = "mock") {
  if (provider === "mock") return runJarvisCommand(message);
  // Add OpenAI/Ollama/n8n provider calls here. Keep API keys server-side only.
  return runJarvisCommand(message);
}
