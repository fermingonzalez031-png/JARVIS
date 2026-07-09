export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Status = "Planning" | "Active" | "Paused" | "Completed";

export type Project = {
  id: string;
  name: string;
  status: Status;
  priority: Priority;
  description: string;
  progress: number;
  nextActions: string[];
  notes: string[];
};

export type Task = {
  id: string;
  title: string;
  project?: string;
  due?: string;
  priority: Priority;
  completed: boolean;
};

export type Note = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  createdAt: string;
};

export type Goal = {
  id: string;
  title: string;
  category: string;
  status: Status;
  target: string;
};

export type KnowledgeItem = {
  id: string;
  title: string;
  content: string;
  source: string;
  tags: string[];
};

export type Automation = {
  id: string;
  name: string;
  cadence: string;
  status: "Mock" | "Ready" | "Connected";
  description: string;
  provider: "n8n" | "Home Assistant" | "Jarvis" | "Calendar";
};

export type Device = {
  id: string;
  name: string;
  type: "Light" | "Climate" | "Camera" | "Sensor" | "Scene";
  status: string;
  room: string;
};
