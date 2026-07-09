import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { tasks } from "@/data/mock";
import { statusTone } from "@/lib/utils";
export default function TasksPage(){return <div><PageHeader title="Tasks" subtitle="Your command queue across Jarvis, ProDrop, TFF, career, and real estate."/><Card><div className="space-y-3">{tasks.map(t=><div key={t.id} className="flex flex-col gap-3 rounded-xl border border-jarvis-line bg-jarvis-bg/40 p-4 md:flex-row md:items-center md:justify-between"><div><p className={`font-semibold ${t.completed ? "line-through text-jarvis-muted" : ""}`}>{t.title}</p><p className="text-sm text-jarvis-muted">{t.project ?? "General"}{t.due ? ` • ${t.due}` : ""}</p></div><span className={`w-fit rounded-full border px-3 py-1 text-xs ${statusTone(t.priority)}`}>{t.priority}</span></div>)}</div></Card></div>}
