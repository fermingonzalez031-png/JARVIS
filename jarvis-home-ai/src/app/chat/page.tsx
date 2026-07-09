"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { runJarvisCommand } from "@/lib/ai";

type Msg = { role: "user" | "assistant"; text: string };

function ChatInner() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", text: "Jarvis online. Command routing is mocked, but the app is structured for OpenAI, Ollama, n8n, Supabase, and Home Assistant." }]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const command = searchParams.get("command");
    if (command) setInput(command);
  }, [searchParams]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", text: input };
    const reply = await runJarvisCommand(input);
    setMessages(prev => [...prev, userMsg, { role: "assistant", text: reply }]);
    setInput("");
  }

  return (
    <div>
      <PageHeader title="AI Command Interface" subtitle="A chat-style command layer ready for OpenAI, Ollama, local LLMs, or n8n workflow execution." />
      <Card>
        <div className="mb-4 h-[58vh] space-y-3 overflow-auto rounded-xl border border-jarvis-line bg-jarvis-bg/80 p-4">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <span className={`inline-block max-w-[85%] rounded-2xl border px-4 py-3 text-sm ${m.role === "user" ? "border-jarvis-glow/50 bg-jarvis-glow/10" : "border-jarvis-line bg-jarvis-card"}`}>{m.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="flex gap-3">
          <input value={input} onChange={e => setInput(e.target.value)} className="w-full rounded-xl border border-jarvis-line bg-jarvis-bg px-4 py-3 outline-none focus:border-jarvis-glow" placeholder="Plan my week, create a reminder, add this to ProDrop..." />
          <button className="rounded-xl bg-jarvis-glow px-5 font-semibold text-jarvis-bg">Send</button>
        </form>
      </Card>
    </div>
  );
}

export default function ChatPage() {
  return <Suspense><ChatInner /></Suspense>;
}
