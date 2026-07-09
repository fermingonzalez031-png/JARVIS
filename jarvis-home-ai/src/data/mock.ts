import type { Automation, Device, Goal, KnowledgeItem, Note, Project, Task } from "@/types";

export const projects: Project[] = [
  {
    id: "prodrop",
    name: "ProDrop HQ",
    status: "Active",
    priority: "Critical",
    progress: 62,
    description: "On-demand parts delivery marketplace for HVAC, plumbing, and electrical contractors.",
    nextActions: ["Finalize MVP request flow", "Connect Airtable/Supabase", "Prepare driver onboarding", "Build supplier confirmation screen"],
    notes: ["Initial market: Westchester/Bronx", "Delivery status flow already mapped", "Use dashboard to review ops daily"]
  },
  {
    id: "tff",
    name: "TFF / The Fermin Frequency",
    status: "Active",
    priority: "High",
    progress: 48,
    description: "Personal content brand for rides, lifestyle, mindset, and behind-the-scenes growth.",
    nextActions: ["Create weekly posting system", "Organize Insta360 footage", "Build caption templates"],
    notes: ["Night rides and one-liners fit the brand", "Build upload-to-caption workflow later"]
  },
  {
    id: "real-estate",
    name: "Real Estate Investing",
    status: "Planning",
    priority: "High",
    progress: 34,
    description: "Build a long-term rental portfolio with disciplined underwriting and lower-stress income.",
    nextActions: ["Build deal analyzer", "Track Orlando market", "Compare FHA vs conventional options", "Add crime and rent filters"],
    notes: ["Goal: portfolio growth with less day-to-day stress", "Keep decision rules simple"]
  },
  {
    id: "career",
    name: "Career Transition",
    status: "Active",
    priority: "High",
    progress: 54,
    description: "Move toward higher compensation, lower stress, and better leverage using HVAC expertise.",
    nextActions: ["Track target companies", "Refine outreach", "Build tech-support profile", "Compare Florida comp packages"],
    notes: ["Strong fit for remote/field technical support leadership", "Protect energy and avoid burnout"]
  },
  {
    id: "jarvis",
    name: "Jarvis Home AI",
    status: "Active",
    priority: "Critical",
    progress: 70,
    description: "Private AI command center for life, work, smart home, automations, and memory.",
    nextActions: ["Deploy MVP", "Connect Supabase", "Plan local AI + Home Assistant bridge", "Add authentication"],
    notes: ["Vercel frontend with future Mac Studio local services", "Keep secrets server-side only"]
  }
];

export const tasks: Task[] = [
  { id: "1", title: "Connect Supabase tables", project: "Jarvis Home AI", priority: "High", completed: false, due: "Next setup session" },
  { id: "2", title: "Build ProDrop task review automation", project: "ProDrop HQ", priority: "Critical", completed: false, due: "This week" },
  { id: "3", title: "Create TFF footage intake system", project: "TFF", priority: "Medium", completed: false, due: "This month" },
  { id: "4", title: "Add Home Assistant token to server env", project: "Jarvis Home AI", priority: "High", completed: false },
  { id: "5", title: "Create weekly money review workflow", project: "Real Estate Investing", priority: "High", completed: false },
  { id: "6", title: "Draft outreach tracker for better roles", project: "Career Transition", priority: "Medium", completed: true }
];

export const notes: Note[] = [
  { id: "n1", title: "Jarvis Vision", body: "Jarvis should become a private operating system for decisions, reminders, automations, files, projects, voice commands, and home control.", tags: ["jarvis", "vision"], createdAt: new Date().toISOString() },
  { id: "n2", title: "Local AI Direction", body: "Use Vercel for the dashboard, but keep sensitive local tools behind Tailscale, Home Assistant, and Mac Studio services.", tags: ["local-ai", "security"], createdAt: new Date().toISOString() },
  { id: "n3", title: "Operating Rule", body: "Jarvis should make obvious decisions independently, keep work moving, and only ask questions when truly blocked.", tags: ["workflow", "autonomy"], createdAt: new Date().toISOString() },
  { id: "n4", title: "Energy Goal", body: "The system should reduce mental load by turning scattered ideas into queues, reminders, and next actions.", tags: ["life-os", "focus"], createdAt: new Date().toISOString() }
];

export const goals: Goal[] = [
  { id: "g1", title: "Deploy Jarvis MVP", category: "Technology", status: "Active", target: "GitHub + Vercel" },
  { id: "g2", title: "Build lower-stress income path", category: "Career", status: "Active", target: "Better role or business leverage" },
  { id: "g3", title: "Create consistent TFF content engine", category: "Brand", status: "Planning", target: "Weekly posts" },
  { id: "g4", title: "Build rental property decision system", category: "Finance", status: "Planning", target: "Deal analyzer + market watch" }
];

export const knowledge: KnowledgeItem[] = [
  { id: "k1", title: "Preferred Jarvis architecture", content: "Next.js dashboard on Vercel, Supabase for memory, n8n for workflows, Home Assistant for devices, Mac Studio for private local AI.", source: "Project plan", tags: ["architecture", "jarvis"] },
  { id: "k2", title: "Security principle", content: "No secrets in the client. Home Assistant tokens, OpenAI keys, and local endpoints must stay in server-side environment variables.", source: "Security note", tags: ["security", "env"] },
  { id: "k3", title: "Primary projects", content: "ProDrop HQ, TFF, Real Estate Investing, Career Transition, and Jarvis Home AI are the main tracked life systems.", source: "Mock memory", tags: ["projects", "memory"] }
];

export const automations: Automation[] = [
  { id: "a1", name: "Morning briefing", cadence: "Daily morning", status: "Mock", provider: "Jarvis", description: "Summarize calendar, tasks, project priorities, weather, and one money/career move." },
  { id: "a2", name: "Evening review", cadence: "Daily evening", status: "Mock", provider: "Jarvis", description: "Capture what happened, what got done, and what should move to tomorrow." },
  { id: "a3", name: "Weekly financial check-in", cadence: "Weekly", status: "Mock", provider: "Calendar", description: "Review savings, debt payoff, investing, and property targets." },
  { id: "a4", name: "ProDrop task review", cadence: "Weekdays", status: "Ready", provider: "n8n", description: "Review open ProDrop tasks and generate a next-action list." },
  { id: "a5", name: "Home Assistant commands", cadence: "On demand", status: "Mock", provider: "Home Assistant", description: "Execute lights, scenes, thermostat, and sensor checks when connected." }
];

export const devices: Device[] = [
  { id: "d1", name: "Living Room Lights", type: "Light", status: "Off", room: "Living Room" },
  { id: "d2", name: "Main Thermostat", type: "Climate", status: "72°F", room: "Hallway" },
  { id: "d3", name: "Front Camera", type: "Camera", status: "Online", room: "Front Door" },
  { id: "d4", name: "Door Sensor", type: "Sensor", status: "Closed", room: "Entry" },
  { id: "d5", name: "Night Mode", type: "Scene", status: "Ready", room: "Whole Home" }
];
