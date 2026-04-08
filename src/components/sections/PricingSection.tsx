import { Check, X } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-8 max-w-7xl mx-auto relative z-10">
      <h2 className="text-[clamp(3rem,6vw,6rem)] font-headline font-black uppercase tracking-tighter leading-none mb-6">
        TRANSPARENT <br/><span className="text-brand-blue">PRICING.</span>
      </h2>
      <p className="text-2xl font-medium max-w-2xl text-primary/80 mb-10 leading-relaxed">
        No tiers. No hidden features. Just a flat rate for the complete unified system.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mb-20 items-center">
        <button className="bg-primary text-background font-headline font-bold uppercase tracking-widest text-xl px-12 py-6 hover:bg-brand-blue transition-colors shadow-2xl">
          Start Your Free Trial
        </button>
        <div className="text-sm font-bold uppercase tracking-widest text-primary/60 border-l-4 border-brand-blue pl-4">
          Zero Contracts.<br/>
          No Credit Card Required.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Competitor Approach */}
        <div className="flex-1 border-4 border-outline bg-background p-12 opacity-60 flex flex-col justify-between hidden md:flex">
          <div>
            <div className="font-mono text-xl font-bold uppercase tracking-widest text-red-600 mb-6 border-b border-outline pb-4 flex items-center justify-between">
              THE DISJOINTED MARKET
              <X className="text-red-600" size={28} />
            </div>
            <div className="space-y-4 mb-8 text-primary font-medium text-lg border-b border-outline pb-8">
              <div className="flex justify-between items-center bg-white p-4">
                <span>Standalone Photo App</span>
                <span className="font-mono font-bold">$100/mo <span className="text-xs text-red-600 block text-right">(3 User Min)</span></span>
              </div>
              <div className="flex justify-between items-center bg-white p-4">
                <span>Time Tracking Platform</span>
                <span className="font-mono font-bold">$20/User</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4">
                <span>Expense & Receipt AI</span>
                <span className="font-mono font-bold">$18/User</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4">
                <span>Team Communication App</span>
                <span className="font-mono font-bold">$12/User</span>
              </div>
            </div>
            <div className="flex justify-between items-center font-headline text-2xl font-bold text-red-600">
              <span>ESTIMATED SPEND:</span>
              <span>$150/mo.</span>
            </div>
          </div>
          <div className="mt-12 text-sm font-bold uppercase tracking-widest text-primary/50 text-center">
            AND NONE OF THEY TALK TO EACH OTHER.
          </div>
        </div>

        {/* FieldSnaps Approach */}
        <div className="flex-1 border-4 border-primary bg-primary text-background p-12 shadow-2xl relative transform lg:-translate-y-8 flex flex-col justify-between">
          <div className="absolute -top-5 right-8 bg-brand-blue text-background font-mono font-bold px-4 py-1 text-sm tracking-widest uppercase">
            The Unified Engine
          </div>
          
          <div>
            <div className="font-mono text-xl font-bold uppercase tracking-widest text-brand-blue mb-6 border-b border-outline/20 pb-4 flex items-center justify-between">
              FIELDSNAPS CORE
              <Check className="text-brand-blue" size={28} />
            </div>
            
            <div className="flex items-end gap-2 mb-12">
              <span className="font-headline font-black text-7xl leading-none">$19.99</span>
              <span className="font-mono text-lg font-bold text-background/60 mb-2 uppercase">/ User / Month</span>
            </div>

            <ul className="space-y-6 mb-12 text-lg font-medium">
              {[
                "Omniscient Search Engine",
                "Ghost Reporter (Voice-to-Log)",
                "Isolated Cloud Camera",
                "Unified Subcontractor SMS Inbox",
                "Automated Receipt Scraping",
                "Geofenced Action Tracking"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-6 h-6 flex items-center justify-center bg-brand-blue/20 text-brand-blue rounded-sm shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="opacity-90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center p-4 bg-background text-primary font-mono font-bold text-sm uppercase tracking-widest mb-8">
              <span>User Minimums</span>
              <span className="text-brand-blue">ZERO</span>
            </div>
            <button className="w-full bg-brand-blue text-background font-headline font-bold text-xl uppercase tracking-widest py-6 hover:bg-white hover:text-primary transition-colors">
              START FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
