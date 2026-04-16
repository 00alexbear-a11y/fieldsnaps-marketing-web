import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-[#111111] hover:text-[#3B82F6] transition-colors">
            <ArrowLeft size={16} />
            Back to FieldSnaps
          </Link>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
            Legal
          </div>
        </div>
      </div>

      {/* Document */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-3">{title}</h1>
          <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-gray max-w-none text-[17px] leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-[#3B82F6] [&_a]:underline [&_strong]:font-bold">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8 font-mono text-xs text-gray-400 uppercase tracking-widest flex flex-col sm:flex-row justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} FieldSnaps Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#3B82F6] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#3B82F6] transition-colors">Privacy</Link>
            <Link href="/eula" className="hover:text-[#3B82F6] transition-colors">EULA</Link>
            <Link href="/cookie" className="hover:text-[#3B82F6] transition-colors">Cookies</Link>
            <Link href="/refund" className="hover:text-[#3B82F6] transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
