import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { notes } from "@/data/mock";
export default function NotesPage(){return <div><PageHeader title="Notes" subtitle="Capture thoughts, service-call ideas, ProDrop details, and personal memory."/><div className="grid gap-4 md:grid-cols-2">{notes.map(n=><Card key={n.id} title={n.title}><p className="text-jarvis-muted">{n.body}</p><div className="mt-4 flex flex-wrap gap-2">{n.tags.map(t=><span key={t} className="rounded-full border border-jarvis-line px-3 py-1 text-xs text-jarvis-glow">{t}</span>)}</div></Card>)}</div></div>}
