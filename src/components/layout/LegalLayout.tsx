import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({ children, title, lastUpdated }: { children: React.ReactNode, title: string, lastUpdated: string }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Super simple minimalist nav for legal pages */}
      <nav className="w-full border-b border-slate-200 bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to FieldSnaps
        </Link>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Legal & Compliance</span>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">{title}</h1>
          <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">Last Updated: {lastUpdated}</p>
        </header>
        
        <article className="prose prose-slate prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h3:text-xl prose-p:leading-relaxed max-w-none">
          {children}
        </article>
      </main>
    </div>
  );
}
