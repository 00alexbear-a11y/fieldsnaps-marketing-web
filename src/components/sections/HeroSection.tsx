"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Search, ArrowRight, Mic } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import AnnotationGalleryUI from "./AnnotationGalleryUI";

const GhostReporterUI = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
       const t = setTimeout(() => setStep(0), 1000); // Prevent snapping while sliding off
       return () => clearTimeout(t);
    }
    const timer = setInterval(() => {
      setStep(s => {
        if (s === 4) return s; // Hold on final step
        return s + 1;
      });
    }, 1800); // 7.2 seconds total animation build
    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-primary p-4 pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opactiy=%220.08%22/%3E%3C/svg%3E')] opacity-10 pointer-events-none"></div>

      {/* Top Header / Mic */}
      <motion.div 
        animate={step === 0 ? { y: '30vh', scale: 1 } : { y: 0, scale: 0.6 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
        className="flex flex-col items-center w-full z-10"
      >
        <motion.div 
          animate={step === 0 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={step === 0 ? { repeat: Infinity, duration: 1.5 } : {}}
          className="w-24 h-24 rounded-full border-4 border-[#ff4500] bg-[#ff4500]/20 flex items-center justify-center mb-4"
        >
          <div className="w-12 h-12 bg-[#ff4500] rounded-full"></div>
        </motion.div>
        
        {step === 0 && (
          <p className="font-mono text-[#ff4500] font-bold tracking-widest uppercase animate-pulse">Listening...</p>
        )}
      </motion.div>

      {/* Pop-up UI Elements */}
      <div className="flex-1 w-full flex flex-col gap-3 mt-4 relative z-10">
        
        {/* Step 1: Raw Transcript */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-outline/20 p-3 rounded-lg shadow-md"
            >
              <div className="text-[10px] font-mono text-[#3B82F6] font-bold uppercase mb-2 flex items-center gap-2">
                <Mic size={10} /> Live Transcript
              </div>
              <p className="text-xs text-background/80 italic leading-relaxed">
                &quot;need to get change order confirmed from client. paint color on the interior changed to origami matte. also update lockbox code to 1205.&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: AI Parsing (To-Dos) */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3 rounded-lg shadow-xl border-l-4 border-[#3B82F6]"
            >
              <div className="text-[10px] font-mono text-[#3B82F6] font-bold uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3B82F6] animate-pulse rounded-full"></span> 3 AI Actions Generated
              </div>
              <div className="flex flex-col gap-2">
                <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.1}} className="flex items-start gap-2 bg-background p-2 rounded border border-outline/50 shadow-sm">
                  <div className="w-3 h-3 flex-shrink-0 bg-[#3B82F6]/20 border border-[#3B82F6] rounded-full mt-0.5 flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#3B82F6] rounded-full"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-primary font-bold leading-tight">Draft Change Order: Interior Paint</span>
                </motion.div>
                
                <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.4}} className="flex items-start gap-2 bg-background p-2 rounded border border-outline/50 shadow-sm">
                  <div className="w-3 h-3 flex-shrink-0 bg-[#ff4500]/20 border border-[#ff4500] rounded-sm mt-0.5"></div>
                  <span className="text-[10px] sm:text-xs text-primary font-bold leading-tight">Update Note: Lockbox code is 1205</span>
                </motion.div>

                <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.7}} className="flex items-start gap-2 bg-background p-2 rounded border border-outline/50 shadow-sm">
                  <div className="w-3 h-3 flex-shrink-0 border-2 border-outline rounded-sm mt-0.5"></div>
                  <span className="text-[10px] sm:text-xs text-primary font-bold leading-tight">To-Do: Confirm paint w/ client</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3/4: Final Actions */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-auto pb-4"
            >
              <button className="w-full bg-gradient-to-r from-[#3B82F6] to-blue-600 text-white font-headline font-bold text-sm py-4 uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {step === 4 ? "Approve & Execute (3)" : "Processing..."}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const slides = ["Search", "Ghost Reporter", "Annotation", "GPS Tracking", "SMS Router"];

  // Dynamic rotate timing: Normal slides 4.5s, Voice Demo 10.5s.
  // Timer completely halts if userInteracted becomes true
  useEffect(() => {
    if (userInteracted) return;

    let delay = 4500;
    if (activeSlide === 1) delay = 10500;
    if (activeSlide === 2) delay = 8500;
    
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeSlide, slides.length, userInteracted]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setUserInteracted(true);
    const threshold = 40;
    if (info.offset.x < -threshold && activeSlide < slides.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else if (info.offset.x > threshold && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const executeManualSlide = (index: number) => {
    setUserInteracted(true);
    setActiveSlide(index);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 flex flex-col md:flex-row items-center justify-center max-w-[1400px] mx-auto gap-12 relative z-10 w-full overflow-hidden">
      {/* Hero Copy (Left) */}
      <div className="flex-1 w-full flex flex-col items-start pt-12 md:pt-0 z-20">
        <div className="inline-block border-2 border-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-sm mb-8 bg-brand-blue text-background border-none">
          J 3:16
        </div>
        
        <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-headline font-black leading-[0.85] uppercase tracking-tighter mb-8 mix-blend-color-burn">
          YOUR FIELD. <br/>IN A<br/><span className="text-brand-blue">SNAP.</span>
        </h1>
        
        <div className="text-lg md:text-xl font-medium max-w-xl text-primary/80 mb-12 leading-relaxed">
          Imagine an AI assistant that knows every detail of your job site, available to your entire team 24/7. Now stop imagining. It&apos;s here. 
          <br/><br/>
          FieldSnaps is a completely new category of software built to let you instantly <strong className="text-primary font-black bg-brand-blue/10 px-1">offload your brain.</strong> Just dump your thoughts, voice notes, and photos into the app, and the AI automatically organizes it into one unified system:
          <ul className="mt-6 space-y-3 text-[16px] md:text-[18px] font-bold text-primary">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs shadow-sm">✓</span> 
              AI Brain Dump <span className="font-normal text-primary/60 text-sm">(Auto-sorts notes & logs)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs shadow-sm">✓</span> 
              Client Texts & Team Messaging
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs shadow-sm">✓</span> 
              Instant AI Site Search
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs shadow-sm">✓</span> 
              Pro-Grade Photo Annotation
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs shadow-sm">✓</span> 
              Geofenced Auto-Clocking
            </li>
            <li className="mt-3">
              <a 
                href="#features" 
                className="text-sm font-bold text-primary/50 tracking-wide uppercase hover:text-brand-blue transition-colors cursor-pointer flex items-center"
              >
                + 4 more massive capabilities ↓
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href="https://app.fieldsnaps.com/signup" target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-background font-headline font-bold uppercase tracking-widest text-lg px-8 py-5 hover:bg-primary transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Start Free Trial <ArrowRight size={24} />
          </Link>
          <a href="#features" className="border-2 border-outline font-headline font-bold text-primary uppercase tracking-widest text-lg px-8 py-5 hover:bg-white transition-colors bg-white/50 text-center flex items-center justify-center backdrop-blur-sm">
            View Live Demo
          </a>
        </div>
        
        {/* Aggressive Pricing Hook */}
        <a href="#pricing" className="mt-8 bg-primary text-white p-4 border-l-[6px] border-[#ff4500] shadow-lg max-w-xl hidden md:block hover:-translate-y-1 hover:shadow-2xl transition-all cursor-pointer group">
           <p className="font-headline font-bold tracking-wide text-lg leading-tight uppercase relative z-10 w-full mb-1">
             Stop paying <span className="text-[#ff4500] line-through decoration-white/50">$150/mo</span> for 4 disjointed apps. Let&apos;s unify your field.
           </p>
           <p className="font-mono text-brand-blue font-bold tracking-widest text-sm uppercase">Get the entire engine for $19.99/User.</p>
           <div className="mt-2 text-xs font-bold text-white/50 uppercase tracking-widest pt-2 border-t border-white/10 group-hover:text-white/70 transition-colors">We hate user minimums too. Start with just 1 user.</div>
        </a>

        {/* Mobile Pricing Hook: Simplified */}
        <a href="#pricing" className="mt-6 border-l-4 border-[#ff4500] pl-4 md:hidden block hover:opacity-80 transition-opacity cursor-pointer">
          <p className="font-headline font-bold text-primary leading-tight uppercase mb-0.5">
            Stop paying <span className="text-[#ff4500] line-through decoration-primary/30">$150/mo</span>.
          </p>
          <p className="font-mono text-brand-blue font-bold tracking-widest text-[11px] uppercase">Get the unified engine for $19.99/U.</p>
          <div className="mt-1.5 text-[10px] font-bold text-primary/50 uppercase tracking-widest pt-1.5 border-t border-outline">We hate user minimums too. Start with just 1 user.</div>
        </a>
        
        <p className="text-[11px] md:text-sm font-bold uppercase tracking-widest text-primary/50 mt-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-blue animate-pulse"></span> 100-Day Money Back Guarantee
        </p>
      </div>

      {/* Hero Visual (Right) - The Sliding iPhone */}
      <div className="flex-1 w-full flex justify-center lg:justify-end relative h-[600px] md:h-[800px] max-w-full">
        {/* The Device Frame */}
        <div className="w-[320px] md:w-[380px] h-[650px] md:h-[780px] bg-primary rounded-[3rem] p-4 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-outline/30 flex-shrink-0 cursor-grab active:cursor-grabbing">
          
          {/* Hardware notch / island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-black rounded-b-3xl z-30 shadow-md"></div>

          {/* Screen Content Wrapper */}
          <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden relative shadow-inner">
            
            {/* Sliding Content Array using Framer Motion */}
            <div className="w-full h-full absolute inset-0 overflow-hidden relative">
              <motion.div 
                className="flex w-[500%] h-full"
                animate={{ x: `-${activeSlide * 20}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                {/* View 1: Search / Feed */}
                <div className="w-1/5 h-full bg-slate-50 flex flex-col relative pt-0">
                  <div className="pt-[52px] pb-2.5 px-6 border-b border-outline/10 shadow-sm relative z-10 bg-white/90 backdrop-blur-md flex flex-row gap-1.5 items-center justify-center -mt-px">
                    <div className="w-4 h-4 bg-primary rounded-[2px] flex items-center justify-center">
                      <div className="w-2 h-2 border-[1.5px] border-background"></div>
                    </div>
                    <span className="font-headline font-bold text-[14px] tracking-tighter uppercase leading-none mt-0.5"><span className="text-brand-blue">FIELD</span>SNAPS</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-end pb-12 bg-noise">
                    <div className="flex flex-col gap-4">
                      <div className="self-end bg-brand-blue text-white rounded-2xl p-4 max-w-[85%] rounded-br-none shadow-md font-medium text-sm leading-relaxed">
                        What is the lockbox code for the Thompson ADU?
                      </div>
                      
                      <div className="self-start bg-white/95 backdrop-blur border border-outline/20 rounded-2xl p-4 max-w-[90%] rounded-bl-none shadow-lg">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-outline/50 pb-2">
                          <Search size={14} className="text-brand-blue" />
                          AI Agent Scanning...
                        </div>
                        <p className="text-sm font-medium text-primary leading-relaxed pb-1">
                          The lockbox code for the Thompson ADU is <strong className="font-mono text-white bg-brand-blue px-1.5 py-0.5 mx-1 rounded">1982</strong>.
                        </p>
                        <div className="mt-3 flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-outline/20">
                            <div className="text-[10px] font-mono font-bold text-primary/50 uppercase">Citation [1]</div>
                            <div className="text-[10px] uppercase font-bold text-brand-blue tracking-wider">SMS Note • Oct 14</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View 2: Ghost Reporter */}
                <div className="w-1/5 h-full pointer-events-none">
                   <GhostReporterUI isActive={activeSlide === 1} />
                </div>

                {/* View 3: Annotation & Gallery sequence */}
                <div className="w-1/5 h-full pointer-events-none">
                   <AnnotationGalleryUI isActive={activeSlide === 2} />
                </div>

                {/* View 4: GPS Tracking */}
                <div className="w-1/5 h-full bg-slate-100 flex flex-col relative overflow-hidden font-sans pointer-events-none">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 40h40v-1H1V0H0v40z%22 fill=%22%23cbd5e1%22 fill-opacity=%220.6%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-80 pointer-events-none"></div>
                  
                  <div className="p-4 pt-14 flex items-center justify-between bg-white/80 backdrop-blur-md z-20 shadow-sm border-b border-outline/10">
                    <span className="font-headline font-bold uppercase tracking-tighter text-lg">Live Crew Map</span>
                    <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 uppercase tracking-widest rounded-full animate-pulse border border-green-200 shadow-sm">3 ON SITE</span>
                  </div>

                  <div className="relative flex-1">
                    {/* Map Pins */}
                    <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                      <div className="bg-brand-blue text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase mb-1.5 whitespace-nowrap tracking-wider">Mike T.</div>
                      <div className="w-5 h-5 bg-brand-blue rounded-full border-[3px] border-white shadow-xl relative z-10"></div>
                      <div className="w-16 h-16 bg-brand-blue/20 rounded-full absolute top-3 animate-ping border border-brand-blue/30"></div>
                    </div>
                    
                    <div className="absolute top-1/2 right-1/4 flex flex-col items-center">
                      <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase mb-1.5 whitespace-nowrap tracking-wider">Sarah J.</div>
                      <div className="w-5 h-5 bg-primary rounded-full border-[3px] border-white shadow-xl relative z-10"></div>
                    </div>

                    <div className="absolute bottom-1/4 left-1/4 flex flex-col items-center">
                      <div className="bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg uppercase mb-1.5 whitespace-nowrap tracking-wider">Dave P.</div>
                      <div className="w-4 h-4 bg-slate-800 rounded-full border-2 border-white shadow-md relative z-10 opacity-70"></div>
                    </div>

                    {/* Location Card */}
                    <div className="absolute bottom-8 left-4 right-4 flex gap-2">
                       <div className="bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-outline/20 flex-1">
                         <div className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                           <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span> Active Job Site
                          </div>
                         <div className="text-sm font-bold text-slate-900 truncate tracking-tight">123 Main St. Renovation</div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* View 5: SMS Router */}
                <div className="w-1/5 h-full bg-slate-50 flex flex-col relative font-sans pointer-events-none">
                  <div className="p-4 pt-14 bg-white/95 backdrop-blur shadow-sm border-b border-outline/10 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm uppercase shadow-inner">Sub</div>
                      <div>
                        <div className="text-[15px] font-bold text-slate-900 leading-tight tracking-tight">Plumbing Sub (Dave)</div>
                        <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-widest mt-0.5">+1 (555) 019-8234</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col gap-6 justify-end pb-[72px] overflow-hidden bg-noise relative">
                    <div className="flex flex-col gap-1 items-start relative z-10">
                      <div className="bg-white border border-slate-200 text-slate-800 p-4 rounded-[1.25rem] rounded-tl-sm text-[15px] shadow-sm max-w-[85%] leading-relaxed">
                        Hey, running behind on the Thompson ADU, rough-in will be done tomorrow by 2pm.
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 pl-1 uppercase tracking-widest mt-1">10:42 AM</div>
                    </div>
                    
                    <div className="flex flex-col gap-1 items-center my-1 relative z-10">
                      <div className="bg-blue-50/90 backdrop-blur border border-blue-200 text-brand-blue text-[10px] font-mono font-bold uppercase py-2 px-4 rounded-full flex items-center gap-2 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                        AI Auto-Routed: Thompson ADU
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 items-end relative z-10">
                      <div className="bg-brand-blue text-white p-4 rounded-[1.25rem] rounded-tr-sm text-[15px] shadow-md max-w-[85%] leading-relaxed font-medium">
                        Got it Dave. Added to the daily log and pushed the inspection to Thursday.
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 pr-1 uppercase tracking-widest mt-1">10:45 AM</div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Bottom Nav indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20 bg-background/50 backdrop-blur-md px-3 py-2 rounded-full pointer-events-auto shadow-sm">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => executeManualSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-brand-blue w-6' : 'bg-outline/50 w-2 hover:bg-brand-blue/50'}`} 
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
