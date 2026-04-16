import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-background border-t-8 border-brand-blue relative z-10">
      <div className="max-w-[1400px] mx-auto px-8 py-20 flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="flex-1">
          <div className="font-headline font-bold text-4xl tracking-tighter uppercase mb-6 flex items-center gap-2">
            <div className="w-10 h-10 bg-background rounded-sm flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary"></div>
            </div>
            <span><span className="text-brand-blue">FIELD</span>SNAPS</span>
          </div>
          <p className="text-xl font-medium text-background/70 font-mono tracking-widest uppercase mb-12 max-w-sm">
            THE UNIFIED ENGINE FOR MODERN CONSTRUCTION.
          </p>
          <div className="flex items-center gap-6 font-mono font-bold text-sm tracking-widest uppercase">
            <Link href="mailto:hello@fieldsnaps.com" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              Contact <ArrowUpRight size={16} />
            </Link>
            <Link href="https://twitter.com/fieldsnaps" className="hover:text-brand-blue transition-colors flex items-center gap-1">
              Twitter <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 font-mono text-sm tracking-widest font-bold uppercase">
          <div className="flex flex-col gap-6">
            <div className="text-brand-blue mb-4">Platform</div>
            <Link href="#features" className="hover:text-brand-blue transition-colors text-background/60">Omniscient AI</Link>
            <Link href="#features" className="hover:text-brand-blue transition-colors text-background/60">Cloud Camera</Link>
            <Link href="#features" className="hover:text-brand-blue transition-colors text-background/60">Ghost Reporter</Link>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-brand-blue mb-4">Company</div>
            <Link href="#pricing" className="hover:text-brand-blue transition-colors text-background/60">Pricing</Link>
            <Link href="mailto:hello@fieldsnaps.com" className="hover:text-brand-blue transition-colors text-background/60">Contact</Link>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-brand-blue mb-4">Legal</div>
            <Link href="/terms" className="hover:text-brand-blue transition-colors text-background/60">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-brand-blue transition-colors text-background/60">Privacy Policy</Link>
            <Link href="/eula" className="hover:text-brand-blue transition-colors text-background/60">EULA</Link>
            <Link href="/cookie" className="hover:text-brand-blue transition-colors text-background/60">Cookie Policy</Link>
            <Link href="/refund" className="hover:text-brand-blue transition-colors text-background/60">Refund Policy</Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-background/20">
        <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-background/40 font-bold tracking-widest uppercase">
          <span>&copy; {new Date().getFullYear()} FieldSnaps Inc. All rights reserved.</span>
          <span className="mt-4 md:mt-0">V3 PRODUCTION BUILD</span>
        </div>
      </div>
    </footer>
  );
}
