import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Jarvis Home AI",
  description: "Private AI dashboard and automation command center"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-jarvis-bg bg-jarvis-radial text-jarvis-text antialiased">
        <Sidebar />
        <MobileNav />
        <main className="min-h-screen p-4 lg:ml-72 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
