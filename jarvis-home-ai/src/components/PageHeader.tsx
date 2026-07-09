type PageHeaderProps = { title: string; subtitle?: string; action?: React.ReactNode };
export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.32em] text-jarvis-glow">Jarvis Home AI</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-3xl text-jarvis-muted">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
