 "use client";

import { FormEvent, useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { supabase } from "@/lib/supabase";

type Note = { id: number | string; title: string; content: string | null; created_at?: string };

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadNotes() {
    if (!supabase) { setMessage("Supabase environment variables are missing."); setLoading(false); return; }
    const { data, error } = await supabase.from("notes").select("*").order("created_at", { ascending: false });
    if (error) setMessage(error.message); else setNotes(data ?? []);
    setLoading(false);
  }

  useEffect(() => { loadNotes(); }, []);

  async function addNote(e: FormEvent) {
    e.preventDefault();
    if (!supabase || !title.trim()) return;
    setMessage("Saving...");
    const { error } = await supabase.from("notes").insert({ title: title.trim(), content: content.trim() });
    if (error) { setMessage(error.message); return; }
    setTitle(""); setContent(""); setMessage("Saved.");
    await loadNotes();
  }

  async function deleteNote(id: Note["id"]) {
    if (!supabase) return;
    const { error } = await supabase.from("notes").delete().eq("id", id);
    if (error) setMessage(error.message); else await loadNotes();
  }

  return <div>
    <PageHeader title="Notes" subtitle="Real Jarvis memory, stored in Supabase." />
    <Card title="Capture a note">
      <form onSubmit={addNote} className="space-y-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full rounded-xl border border-jarvis-line bg-jarvis-bg/60 px-4 py-3 outline-none focus:border-jarvis-glow" />
        <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="What should Jarvis remember?" rows={5} className="w-full rounded-xl border border-jarvis-line bg-jarvis-bg/60 px-4 py-3 outline-none focus:border-jarvis-glow" />
        <button className="rounded-xl border border-jarvis-glow bg-jarvis-glow/10 px-4 py-2 font-semibold text-jarvis-glow">Save note</button>
        {message && <p className="text-sm text-jarvis-muted">{message}</p>}
      </form>
    </Card>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {loading ? <Card><p className="text-jarvis-muted">Loading memory...</p></Card> :
       notes.length === 0 ? <Card><p className="text-jarvis-muted">No notes yet. Create your first real Jarvis memory above.</p></Card> :
       notes.map(n=><Card key={n.id} title={n.title}>
         <p className="whitespace-pre-wrap text-jarvis-muted">{n.content}</p>
         <button onClick={()=>deleteNote(n.id)} className="mt-4 text-xs text-red-300 hover:text-red-200">Delete</button>
       </Card>)}
    </div>
  </div>;
}
