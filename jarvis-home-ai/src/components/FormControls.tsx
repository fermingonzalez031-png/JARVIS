import { cn } from "@/lib/utils";
export const inputClass = "w-full rounded-xl border border-jarvis-line bg-jarvis-bg/70 px-4 py-3 text-jarvis-text outline-none placeholder:text-jarvis-muted/70 focus:border-jarvis-glow";
export const buttonClass = "rounded-xl border border-jarvis-glow bg-jarvis-glow/10 px-4 py-2 font-semibold text-jarvis-glow hover:bg-jarvis-glow/20 disabled:cursor-not-allowed disabled:opacity-50";
export function Field({label,children,className}:{label:string;children:React.ReactNode;className?:string}){return <label className={cn("block space-y-1.5",className)}><span className="text-sm text-jarvis-muted">{label}</span>{children}</label>}
export function Message({text}:{text:string}){return text?<p className="text-sm text-jarvis-muted" role="status">{text}</p>:null}
export function Empty({children}:{children:React.ReactNode}){return <div className="rounded-xl border border-dashed border-jarvis-line p-8 text-center text-jarvis-muted">{children}</div>}
