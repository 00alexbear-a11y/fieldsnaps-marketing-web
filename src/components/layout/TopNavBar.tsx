import { Menu } from "lucide-react";
import Link from "next/link";

export default function TopNavBar() {
  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b-2 border-outline/50 top-0 left-0 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center transform group-hover:scale-105 transition-transform">
            <div className="w-4 h-4 border-2 border-background"></div>
          </div>
          <span className="font-headline font-bold text-2xl tracking-tighter uppercase"><span className="text-brand-blue">FIELD</span>SNAPS</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest font-bold uppercase">
          <Link href="#features" className="hover:text-brand-blue transition-colors">Stack</Link>
          <Link href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</Link>
          <Link href="https://app.fieldsnaps.com" target="_blank" className="hover:text-primary/70 transition-colors">Login</Link>
          <Link href="https://app.fieldsnaps.com/signup" target="_blank" className="bg-primary text-background px-6 py-3 hover:bg-brand-blue transition-colors font-headline">
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-primary">
          <Menu size={32} />
        </button>
      </div>
    </nav>
  );
}
