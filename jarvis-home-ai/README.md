# Jarvis Home AI

A private personal AI dashboard and automation hub built with Next.js, TypeScript, Tailwind CSS, and a Supabase-ready data layer.

This version is a stronger MVP: it is intentionally functional with mock data while keeping every major integration modular so it can be connected later without rewriting the whole app.

## Included pages

- `/dashboard` — mission control with today, time, weather placeholder, stats, active projects, and recent memory
- `/chat` — Jarvis command interface with mock command routing
- `/notes` — personal memory notes
- `/tasks` — action queue across Jarvis, ProDrop, TFF, career, and real estate
- `/projects` — project cards with progress, notes, priorities, and next actions
- `/goals` — high-level outcomes
- `/knowledge` — future searchable memory layer
- `/automations` — planned automation cards for Jarvis, n8n, Home Assistant, and calendar workflows
- `/home` — smart home control placeholder for Home Assistant
- `/voice` — voice assistant placeholder
- `/settings` — integration and environment variable reminders

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready client setup
- Vercel deployment target
- Modular placeholders for OpenAI, Ollama, n8n, Home Assistant, Whisper, Piper, and ElevenLabs

## Local setup

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Useful scripts

```bash
npm run dev        # Start local dev server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Next lint
npm run typecheck  # TypeScript validation
```

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in values as you connect services.

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
OLLAMA_BASE_URL=http://localhost:11434
LOCAL_LLM_ENDPOINT=http://localhost:11434/api/chat
HOME_ASSISTANT_URL=http://homeassistant.local:8123
HOME_ASSISTANT_TOKEN=
N8N_WEBHOOK_URL=
```

## Where to connect integrations

### OpenAI / Ollama / local AI

Use:

```txt
src/lib/ai.ts
src/app/api/ai/route.ts
```

Keep cloud and local provider calls server-side. The current app uses mock responses so it runs without keys.

### Supabase

Use:

```txt
src/lib/supabase.ts
src/data/mock.ts
```

Replace mock arrays with Supabase queries once tables exist.

Suggested tables:

```sql
create table notes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  tags text[] default '{}',
  created_at timestamptz default now()
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  project text,
  due_date date,
  priority text default 'Medium',
  completed boolean default false,
  created_at timestamptz default now()
);

create table projects (
  id text primary key,
  name text not null,
  status text default 'Active',
  priority text default 'Medium',
  description text,
  progress int default 0,
  next_actions text[] default '{}',
  notes text[] default '{}',
  created_at timestamptz default now()
);

create table goals (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text,
  status text default 'Active',
  target text,
  created_at timestamptz default now()
);

create table knowledge_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  source text,
  tags text[] default '{}',
  created_at timestamptz default now()
);
```

### n8n

Use `N8N_WEBHOOK_URL` and connect automation cards from:

```txt
src/app/automations/page.tsx
src/data/mock.ts
```

### Home Assistant

Use:

```txt
src/lib/home-assistant.ts
src/app/api/home-assistant/route.ts
src/app/home/page.tsx
```

Keep `HOME_ASSISTANT_TOKEN` server-side only.

### Voice

Use:

```txt
src/app/voice/page.tsx
```

The MVP has a simple placeholder UI. Future options:

- Browser Speech Recognition for quick local testing
- Whisper for speech-to-text
- Piper or ElevenLabs for text-to-speech
- OpenAI voice for cloud speech

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

## Security notes

- Do not commit `.env.local`.
- Do not expose Home Assistant tokens to the browser.
- Keep local AI and Home Assistant behind Tailscale, VPN, or a private network.
- Treat Vercel as the command dashboard and your Mac Studio/home network as the private execution layer.

## Development roadmap

### Phase 1 — App foundation

- Add authentication
- Connect Supabase CRUD for notes, tasks, projects, goals, and knowledge
- Add project detail pages
- Add task create/edit/delete forms

### Phase 2 — AI command routing

- Add provider switch: mock, OpenAI, Ollama
- Add structured command parser
- Add memory retrieval before responses
- Add action confirmations for risky commands

### Phase 3 — Automations

- Connect n8n webhooks
- Add morning briefing and evening review
- Add weekly money review
- Add ProDrop task review

### Phase 4 — Smart home and voice

- Connect Home Assistant service calls
- Add device status polling
- Add voice input and spoken responses
- Add local-only mode for privacy

### Phase 5 — Personal operating system

- Gmail/Calendar/Drive summaries
- ProDrop operational dashboard
- TFF content intake workflow
- Real estate deal analyzer
- Career opportunity tracker


## Functional MVP modules
Notes, Tasks, Projects, Goals, Knowledge, Dashboard, Automations, browser Voice, integration readiness Settings, and database-backed chat commands are implemented. Run the migration in `supabase/migrations/20260710_functional_mvp.sql`.

## Security note
The current browser CRUD MVP uses temporary anonymous RLS policies. Do not store highly sensitive data until Supabase Auth and per-user ownership policies are enabled.
