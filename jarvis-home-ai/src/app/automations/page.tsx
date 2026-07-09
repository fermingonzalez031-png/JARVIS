import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { automations } from "@/data/mock";
import { statusTone } from "@/lib/utils";
export default function AutomationsPage(){return <div><PageHeader title="Automations" subtitle="Workflow cards are mocked now, but structured for n8n, calendar, Gmail, Home Assistant, and AI triggers."/><div className="grid gap-4 lg:grid-cols-2">{automations.map(a=><Card key={a.id} title={a.name} eyebrow={a.provider}><p className="text-jarvis-muted">{a.description}</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full border border-jarvis-line px-3 py-1 text-xs">{a.cadence}</span><span className={`rounded-full border px-3 py-1 text-xs ${statusTone(a.status)}`}>{a.status}</span></div></Card>)}</div></div>}
