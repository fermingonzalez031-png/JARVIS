import { cn } from "@/lib/utils";

type CardProps = {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, eyebrow, children, className }: CardProps) {
  return (
    <section className={cn("rounded-2xl border border-jarvis-line/80 bg-jarvis-panel/80 p-5 shadow-panel backdrop-blur", className)}>
      {(title || eyebrow) && (
        <div className="mb-4">
          {eyebrow && <p className="mb-1 text-xs uppercase tracking-[0.24em] text-jarvis-glow">{eyebrow}</p>}
          {title && <h2 className="text-lg font-semibold text-jarvis-text">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
