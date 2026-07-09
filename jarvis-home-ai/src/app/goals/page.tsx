import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { goals } from "@/data/mock";
import { statusTone } from "@/lib/utils";
export default function GoalsPage(){return <div><PageHeader title="Goals" subtitle="High-level outcomes Jarvis should keep visible while turning them into tasks."/><div className="grid gap-4 md:grid-cols-2">{goals.map(g=><Card key={g.id} title={g.title} eyebrow={g.category}><p className="text-jarvis-muted">Target: {g.target}</p><span className={`mt-4 inline-block rounded-full border px-3 py-1 text-xs ${statusTone(g.status)}`}>{g.status}</span></Card>)}</div></div>}
