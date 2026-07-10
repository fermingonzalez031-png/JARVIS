import Link from "next/link";
import { Activity, Bot, BrainCircuit, CalendarClock, CheckSquare, Gauge, Home, Lightbulb, Mic, Settings, Target, Workflow } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/chat", label: "Command", icon: Bot },
  { href: "/notes", label: "Notes", icon: Lightbulb },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/projects", label: "Projects", icon: Activity },
  { href: "/goals", label: "Goals", icon: Target },
  { href: "/knowledge", label: "Knowledge", icon: BrainCircuit },
  { href: "/automations", label: "Automations", icon: Workflow },
  { href: "/home", label: "Smart Home", icon: Home },
  { href: "/voice", label: "Voice", icon: Mic },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-jarvis-line/70 bg-jarvis-surface/95 p-5 backdrop-blur lg:block">
      <Link href="/dashboard" className="mb-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-jarvis-glow/50 bg-jarvis-glow/10 shadow-glow">
          <CalendarClock className="h-5 w-5 text-jarvis-glow" />
        </div>
        <div>
          <p className="font-bold tracking-wide">JARVIS</p>
          <p className="text-xs text-jarvis-muted">Private Command OS</p>
        </div>
      </Link>
      <nav className="space-y-1">
        {nav.map(item => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-jarvis-muted transition hover:bg-jarvis-card hover:text-jarvis-text">
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-jarvis-glow/30 bg-jarvis-glow/10 p-4">
        <p className="text-sm font-semibold text-jarvis-glow">System Status</p>
        <p className="mt-1 text-xs text-jarvis-muted">Core data online. External integrations show honest setup states until connected.</p>
      </div>
    </aside>
  );
}
