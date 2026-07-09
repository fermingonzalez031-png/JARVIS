import { Card } from "@/components/Card";

type StatCardProps = { label: string; value: string | number; detail?: string };
export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-jarvis-glow/10 blur-2xl" />
      <p className="text-sm text-jarvis-muted">{label}</p>
      <p className="mt-2 text-4xl font-black tracking-tight">{value}</p>
      {detail && <p className="mt-1 text-sm text-jarvis-muted">{detail}</p>}
    </Card>
  );
}
