import Link from "next/link";

export function MobileNav() {
  return (
    <div className="sticky top-0 z-20 border-b border-jarvis-line bg-jarvis-surface/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="font-bold tracking-wide text-jarvis-glow">JARVIS</Link>
        <div className="flex gap-3 text-xs text-jarvis-muted">
          <Link href="/chat">Chat</Link>
          <Link href="/tasks">Tasks</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}
