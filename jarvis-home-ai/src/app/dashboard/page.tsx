import Link from "next/link";
import { Card } from "@/components/Card";
import { CommandPanel } from "@/components/CommandPanel";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { automations, notes, projects, tasks } from "@/data/mock";
import { todayLabel, timeLabel } from "@/lib/utils";

export default function DashboardPage() {
  const openTasks = tasks.filter(t => !t.completed);
  return (
    <div>
      <PageHeader title="Welcome back, Fermin" subtitle="Your private AI command center for projects, memory, automations, and home control." />
      <div className="grid gap-4 lg:grid-cols-4">
        <StatCard label="Today" value={timeLabel()} detail={todayLabel()} />
        <StatCard label="Open Tasks" value={openTasks.length} detail="active next actions" />
        <StatCard label="Tracked Projects" value={projects.length} detail="life systems online" />
        <StatCard label="Automations" value={automations.length} detail="planned workflows" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card title="Mission Control" eyebrow="Command" className="lg:col-span-2">
          <p className="mb-4 text-jarvis-muted">Use this as your launch point: capture thoughts, turn them into tasks, and route them to the correct project.</p>
          <CommandPanel />
        </Card>
        <Card title="Weather Placeholder" eyebrow="External API Ready">
          <p className="text-4xl font-black">72°F</p>
          <p className="mt-2 text-jarvis-muted">Clear. Replace with OpenWeather, Home Assistant sensor, or another weather API.</p>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="Active Projects">
          <div className="space-y-3">
            {projects.slice(0, 5).map(project => (
              <Link href="/projects" key={project.id} className="block rounded-xl border border-jarvis-line bg-jarvis-bg/50 p-4 hover:border-jarvis-glow/70">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{project.name}</p>
                  <span className="text-xs text-jarvis-glow">{project.progress}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-jarvis-line"><div className="h-2 rounded-full bg-jarvis-glow" style={{ width: `${project.progress}%` }} /></div>
                <p className="mt-2 text-sm text-jarvis-muted">{project.nextActions[0]}</p>
              </Link>
            ))}
          </div>
        </Card>
        <Card title="Recent Memory">
          <div className="space-y-3">
            {notes.map(note => (
              <div key={note.id} className="rounded-xl border border-jarvis-line bg-jarvis-bg/50 p-4">
                <p className="font-semibold">{note.title}</p>
                <p className="mt-1 text-sm text-jarvis-muted">{note.body}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
