import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
const settings=[
  ["AI Provider","Mock now. Future: OpenAI, Ollama, local endpoint."],
  ["Database","Supabase-ready. Add URL and anon key to .env.local."],
  ["Home Assistant","Server-side token only. Never expose to browser."],
  ["Automation Engine","n8n webhook placeholder configured by env var."],
  ["Voice Stack","Browser placeholder. Future: Whisper + Piper or ElevenLabs."],
  ["Theme","Dark Jarvis command-center UI."],
];
export default function SettingsPage(){return <div><PageHeader title="Settings" subtitle="Connection points and configuration reminders for production setup."/><div className="grid gap-4 md:grid-cols-2">{settings.map(([title,body])=><Card key={title} title={title}><p className="text-jarvis-muted">{body}</p></Card>)}</div><Card className="mt-4" title="Environment Variables"><pre className="overflow-auto rounded-xl bg-jarvis-bg p-4 text-sm text-jarvis-muted">NEXT_PUBLIC_SUPABASE_URL\nNEXT_PUBLIC_SUPABASE_ANON_KEY\nOPENAI_API_KEY\nOLLAMA_BASE_URL\nLOCAL_LLM_ENDPOINT\nHOME_ASSISTANT_URL\nHOME_ASSISTANT_TOKEN\nN8N_WEBHOOK_URL</pre></Card></div>}
