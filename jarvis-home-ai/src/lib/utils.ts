import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayLabel() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date());
}

export function timeLabel() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());
}

export function statusTone(status: string) {
  const s = status.toLowerCase();
  if (s.includes("active") || s.includes("online") || s.includes("ready")) return "text-jarvis-green border-jarvis-green/40 bg-jarvis-green/10";
  if (s.includes("critical") || s.includes("high")) return "text-jarvis-amber border-jarvis-amber/40 bg-jarvis-amber/10";
  if (s.includes("paused") || s.includes("blocked")) return "text-jarvis-red border-jarvis-red/40 bg-jarvis-red/10";
  return "text-jarvis-glow border-jarvis-glow/40 bg-jarvis-glow/10";
}
