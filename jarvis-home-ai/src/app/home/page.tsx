import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { devices } from "@/data/mock";
import { statusTone } from "@/lib/utils";
export default function SmartHomePage(){return <div><PageHeader title="Smart Home" subtitle="Home Assistant placeholder for lights, thermostat, cameras, sensors, and scenes."/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{devices.map(d=><Card key={d.id} title={d.name} eyebrow={d.type}><p className="text-jarvis-muted">Room: {d.room}</p><span className={`mt-4 inline-block rounded-full border px-3 py-1 text-xs ${statusTone(d.status)}`}>{d.status}</span><button className="mt-5 w-full rounded-xl border border-jarvis-line px-4 py-2 text-sm text-jarvis-muted hover:border-jarvis-glow hover:text-jarvis-text">Mock Control</button></Card>)}</div></div>}
