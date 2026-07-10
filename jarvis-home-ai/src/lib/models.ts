export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Status = "Planning" | "Active" | "Paused" | "Completed";
export type Note = { id:number; title:string; content:string|null; tags:string[]; category:string|null; created_at:string; updated_at:string };
export type Project = { id:number; name:string; description:string|null; status:string; priority:string; progress:number; notes:string[]; next_actions:string[]; created_at:string; updated_at:string };
export type Task = { id:number; title:string; description:string|null; status:string; priority:string; due_date:string|null; completed:boolean; project_id:number|null; project?:{name:string}|null; created_at:string; updated_at:string };
export type Goal = { id:number; title:string; description:string|null; status:string; priority:string; progress:number; target_date:string|null; project_id:number|null; milestones:string[]; created_at:string; updated_at:string };
export type KnowledgeItem = { id:number; title:string; content:string; category:string|null; source:string|null; tags:string[]; created_at:string; updated_at:string };
export type Automation = { id:number; name:string; description:string|null; enabled:boolean; schedule_text:string|null; provider:string; last_run_status:string|null; next_run_at:string|null; configuration_status:string; created_at:string; updated_at:string };
