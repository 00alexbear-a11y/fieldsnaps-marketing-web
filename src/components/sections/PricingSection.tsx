"use client";

import { Check, X } from "lucide-react";

export default function PricingSection() {
  // Render the repetitive features to keep JSX clean
  const fieldSnapsFeatures = [
    "The Owner's Brain (AI Search)",
    "AI Voice Brain Dump",
    "AI Walk The Job (Logs, To-Dos & Drafts)",
    "AI Receipt & Expense Parsing",
    "Geofenced Labor Allocation",
    "Unified Subcontractor SMS Inbox",
    "Isolated Cloud Camera & Markup",
    "Massive Public Link Sharing",
    "Unlimited Projects & Cloud Storage"
  ];

  return (
    <section id="pricing" className="py-16 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
      <h2 className="text-[clamp(3rem,6vw,6rem)] font-headline font-black uppercase tracking-tighter leading-none mb-6 self-start">
        TRANSPARENT <br/><span className="text-brand-blue">PRICING.</span>
      </h2>
      <p className="text-xl md:text-2xl font-medium max-w-2xl text-primary/80 mb-10 leading-relaxed pr-4 self-start">
        No tiers. No hidden features. Just a flat rate for the complete unified system.
      </p>

      {/* DESKTOP VIEW: Side-by-Side Flexbox */}
      <div className="hidden lg:flex flex-row gap-12 items-stretch h-auto pt-10">
        {/* Competitor Approach */}
        <div className="flex-1 border-4 border-outline bg-background p-12 opacity-80 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xl font-bold uppercase tracking-widest text-red-600 mb-6 border-b border-outline pb-4 flex items-center justify-between">
              THE DISJOINTED MARKET
              <X className="text-red-600" size={28} />
            </div>
            <div className="space-y-4 mb-8 text-primary font-medium text-lg border-b border-outline pb-8">
              <div className="flex justify-between items-center bg-white p-4">
                <span>Standalone Photo App</span>
                <span className="font-mono font-bold">$100/mo <span className="text-xs text-red-600 block text-right">(3 Min)</span></span>
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
                <span>Team Communication</span>
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
        <div className="flex-1 border-4 border-primary bg-primary text-background p-12 shadow-2xl relative transform -translate-y-8 flex flex-col justify-between">
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
              {fieldSnapsFeatures.map((feature, i) => (
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
      
      {/* MOBILE VIEW: Ultra Compact Vertical Stack */}
      <div className="flex lg:hidden flex-col w-full max-w-md mx-auto relative pt-8 pb-12 gap-0">
        
        {/* COMPONENT 1: The Competitor Print Receipt */}
        <div className="w-full border-2 border-outline bg-[#F9F9F9] p-4 flex flex-col opacity-90 border-b-0 pb-10">
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-600 mb-3 border-b border-outline pb-2 flex items-center justify-between">
            THE DISJOINTED MARKET
            <X className="text-red-600" size={14} />
          </div>
          <div className="space-y-1 mb-4 text-primary font-medium text-[11px] border-b border-outline pb-4">
            <div className="flex justify-between items-center py-1 border-b border-outline/30 border-dashed">
              <span>Photo App + Time Tracking</span>
              <span className="font-mono font-bold">$120</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-outline/30 border-dashed">
              <span>Receipts + Communication</span>
              <span className="font-mono font-bold">$30</span>
            </div>
          </div>
          <div className="flex justify-between items-center font-headline text-sm font-bold text-red-600 uppercase">
            <span>Messy. Expensive.</span>
            <span>$150/mo</span>
          </div>
        </div>

        {/* COMPONENT 2: FieldSnaps Core Dominance */}
        <div className="w-[105%] -ml-[2.5%] relative z-10 border-[5px] border-primary bg-primary text-background p-6 flex flex-col shadow-2xl -mt-6">
          <div className="absolute -top-3 right-4 bg-brand-blue text-background font-mono font-bold px-2 py-0.5 text-[10px] tracking-widest uppercase shadow">
            Unified Engine
          </div>
          
          <div className="font-mono text-sm font-bold uppercase tracking-widest text-brand-blue mb-4 border-b border-outline/20 pb-2 flex items-center justify-between">
            FIELDSNAPS CORE
            <Check className="text-brand-blue" size={18} />
          </div>
          
          <div className="flex items-end gap-2 mb-6">
            <span className="font-headline font-black text-6xl leading-none tracking-tighter">$19.99</span>
            <span className="font-mono text-[10px] font-bold text-background/60 mb-1 uppercase">/ User / Mo</span>
          </div>

          <ul className="space-y-3 mb-6 text-[13px] font-medium border-t border-outline/20 pt-6">
            {fieldSnapsFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-4 h-4 flex items-center justify-center bg-brand-blue text-background rounded-sm shrink-0">
                  <Check size={10} strokeWidth={3} />
                </span>
                <span className="opacity-90">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center p-3 bg-background text-primary font-mono font-bold text-[10px] uppercase tracking-widest mb-6 border border-outline/20">
            <span>Contracts & Minimums</span>
            <span className="text-brand-blue text-xs leading-none">ZERO</span>
          </div>
          <button className="w-full bg-brand-blue text-background font-headline font-black text-lg uppercase tracking-widest py-4 hover:bg-white hover:text-primary transition-colors shadow-xl">
            START FREE TRIAL
          </button>
        </div>

      </div>
    </section>
  );
}
