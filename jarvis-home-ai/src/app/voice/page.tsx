"use client";
import { useState } from "react";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";

export default function VoicePage(){
  const [status,setStatus]=useState("Idle");
  return <div><PageHeader title="Voice Assistant" subtitle="Browser speech placeholder today; ready for Whisper, Piper, ElevenLabs, or OpenAI voice later."/><Card title="Voice Console"><div className="rounded-2xl border border-jarvis-line bg-jarvis-bg/60 p-6 text-center"><p className="text-sm uppercase tracking-[0.3em] text-jarvis-muted">Status</p><p className="mt-2 text-4xl font-black text-jarvis-glow">{status}</p><div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"><button onClick={()=>setStatus("Listening...")} className="rounded-xl bg-jarvis-glow px-5 py-3 font-semibold text-jarvis-bg">Start Listening</button><button onClick={()=>setStatus("Idle")} className="rounded-xl border border-jarvis-line px-5 py-3">Stop Listening</button><button onClick={()=>setStatus("Speaking mock response")} className="rounded-xl border border-jarvis-line px-5 py-3">Speak Response</button></div></div></Card></div>
}
