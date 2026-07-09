import Link from "next/link";

export function CommandPanel() {
  return (
    <div className="rounded-2xl border border-jarvis-glow/30 bg-jarvis-glow/10 p-4">
      <p className="text-sm font-semibold text-jarvis-glow">Quick Commands</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {["Plan my week", "Review ProDrop", "Summarize my day", "Create a reminder"].map(command => (
          <Link key={command} href={`/chat?command=${encodeURIComponent(command)}`} className="rounded-xl border border-jarvis-line bg-jarvis-bg/70 px-3 py-2 text-sm text-jarvis-muted hover:border-jarvis-glow hover:text-jarvis-text">
            {command}
          </Link>
        ))}
      </div>
    </div>
  );
}
