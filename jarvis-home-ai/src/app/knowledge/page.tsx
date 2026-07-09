import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { knowledge } from "@/data/mock";
export default function KnowledgePage(){return <div><PageHeader title="Personal Knowledge" subtitle="A future searchable memory layer for decisions, files, specs, ideas, and personal context."/><div className="space-y-4">{knowledge.map(k=><Card key={k.id} title={k.title} eyebrow={k.source}><p className="text-jarvis-muted">{k.content}</p><div className="mt-4 flex flex-wrap gap-2">{k.tags.map(t=><span key={t} className="rounded-full border border-jarvis-line px-3 py-1 text-xs text-jarvis-glow">{t}</span>)}</div></Card>)}</div></div>}
