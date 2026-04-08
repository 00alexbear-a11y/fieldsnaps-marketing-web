"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Mic } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

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
                "need to get change order confirmed from client. paint color on the interior changed to origami matte. also update lockbox code to 1205."
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
  const slides = ["Search", "Voice", "Scan"];

  // Dynamic rotate timing: Normal slides 4.5s, Voice Demo 10.5s.
  useEffect(() => {
    let delay = 4500;
    if (activeSlide === 1) delay = 10500;
    
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeSlide, slides.length]);

  return (
    <section className="min-h-screen pt-32 pb-20 px-8 flex flex-col md:flex-row items-center justify-center max-w-[1400px] mx-auto gap-12 relative z-10">
      {/* Hero Copy (Left) */}
      <div className="flex-1 w-full flex flex-col items-start pt-12 md:pt-0">
        <div className="inline-block border-2 border-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-sm mb-8 bg-brand-blue text-background border-none">
          J 3:16
        </div>
        
        <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-headline font-black leading-[0.85] uppercase tracking-tighter mb-8 mix-blend-color-burn">
          YOUR FIELD. <br/>IN A<br/><span className="text-brand-blue">SNAP.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium max-w-xl text-primary/80 mb-12 leading-relaxed">
          Imagine an assistant who knows the full context of every single note and detail about every single job—and your whole team has access to them 24/7. Now stop imagining. It's here. FieldSnaps combines your photos, logs, time, and messaging into one unified <strong>"Owner's Brain,"</strong> freeing you from juggling five different apps so you can run the site and go home.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href="https://app.fieldsnaps.com/signup" target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-background font-headline font-bold uppercase tracking-widest text-lg px-8 py-5 hover:bg-primary transition-colors flex items-center justify-center gap-3 shadow-lg">
            Start Free Trial <ArrowRight size={24} />
          </Link>
          <a href="#features" className="border-2 border-outline font-headline font-bold text-primary uppercase tracking-widest text-lg px-8 py-5 hover:bg-white transition-colors bg-white/50 text-center flex items-center justify-center">
            View Live Demo
          </a>
        </div>
        <p className="text-sm font-bold uppercase tracking-widest text-primary/50 mt-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span> No Credit Card Required
        </p>
      </div>

      {/* Hero Visual (Right) - The Sliding iPhone */}
      <div className="flex-1 w-full flex justify-center lg:justify-end relative h-[600px] md:h-[800px]">
        {/* Massive Background Typography */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-headline font-black text-[12vw] text-outline/20 leading-none pointer-events-none mix-blend-multiply whitespace-nowrap hidden lg:block">
          SYS_READY
        </div>

        {/* The Device Frame */}
        <div className="w-[320px] md:w-[380px] h-[650px] md:h-[780px] bg-primary rounded-[3rem] p-4 relative z-10 shadow-2xl border-4 border-outline/30 flex-shrink-0">
          
          {/* Hardware notch / island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-black rounded-b-3xl z-30"></div>

          {/* Screen Content Wrapper */}
          <div className="w-full h-full bg-background rounded-[2.25rem] overflow-hidden relative">
            
            {/* Sliding Content Array using Framer Motion */}
            <div className="w-full h-full absolute inset-0 overflow-hidden relative">
              <motion.div 
                className="flex w-[300%] h-full"
                animate={{ x: `-${activeSlide * 33.333}%` }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {/* View 1: Search / Feed */}
                <div className="w-1/3 h-full bg-slate-50 flex flex-col relative pt-0">
                  <div className="pt-[52px] pb-2.5 px-6 border-b border-outline/10 shadow-sm relative z-10 bg-white flex flex-row gap-1.5 items-center justify-center -mt-px">
                    <div className="w-4 h-4 bg-primary rounded-[2px] flex items-center justify-center">
                      <div className="w-2 h-2 border-[1.5px] border-background"></div>
                    </div>
                    <span className="font-headline font-bold text-[14px] tracking-tighter uppercase leading-none mt-0.5"><span className="text-brand-blue">FIELD</span>SNAPS</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-end pb-12">
                    <div className="flex flex-col gap-4">
                      <div className="self-end bg-brand-blue text-white rounded-2xl p-4 max-w-[85%] rounded-br-none shadow-sm font-medium">
                        What is the lockbox code for the Thompson ADU?
                      </div>
                      
                      <div className="self-start bg-white border border-outline rounded-2xl p-4 max-w-[90%] rounded-bl-none shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-outline/50 pb-2">
                          <Search size={14} className="text-brand-blue" />
                          AI Agent Scanning...
                        </div>
                        <p className="text-sm font-medium text-primary">
                          The lockbox code for the Thompson ADU is <strong className="font-mono text-brand-blue mx-1">1982</strong>.
                        </p>
                        <div className="mt-3 flex items-center justify-between bg-background p-2 rounded border border-outline/50">
                            <div className="text-[10px] font-mono font-bold text-primary/50 uppercase">Citation [1]</div>
                            <div className="text-[10px] uppercase font-bold text-brand-blue">SMS Note • Oct 14</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View 2: Ghost Reporter */}
                <div className="w-1/3 h-full">
                   <GhostReporterUI isActive={activeSlide === 1} />
                </div>

                {/* View 3: Scan / Photo System */}
                <div className="w-1/3 h-full bg-[#111111] flex flex-col relative overflow-hidden font-mono text-white">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center p-4 pt-12 bg-black/60 backdrop-blur-md absolute top-0 w-full z-20">
                     <span className="text-[10px] font-bold tracking-widest text-[#3B82F6] uppercase">123 MAIN ST</span>
                     <span className="text-[10px] bg-[#ff4500] px-2 py-0.5 font-bold uppercase text-white">HDR ON</span>
                  </div>

                  {/* Grid Area */}
                  <div className="absolute inset-0 z-10 flex flex-col pt-16 pb-24 opacity-60">
                     <div className="flex-1 border-b border-white/20 relative">
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 left-1/3"></div>
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 right-1/3"></div>
                     </div>
                     <div className="flex-1 border-b border-white/20 relative">
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 left-1/3"></div>
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 right-1/3"></div>
                        {/* AI Detection Box */}
                       <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-[#3B82F6] bg-[#3B82F6]/10 flex items-end justify-center pb-1">
                         <span className="bg-[#3B82F6] text-[8px] px-1 font-bold text-black uppercase">SUBJECT DETECTED</span>
                       </div>
                     </div>
                     <div className="flex-1 relative">
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 left-1/3"></div>
                       <div className="absolute right-0 top-0 h-full w-px bg-white/20 right-1/3"></div>
                     </div>
                  </div>

                  {/* Bottom Bar Controls */}
                  <div className="mt-auto flex flex-col bg-black/80 backdrop-blur-md z-20 border-t border-white/10">
                     <div className="flex justify-center gap-6 pt-4 text-[10px] font-bold tracking-widest text-white/50">
                       <span>PANO</span>
                       <span className="text-[#3B82F6]">SCAN</span>
                       <span>VIDEO</span>
                     </div>
                     <div className="p-4 flex justify-between items-center pb-8 border-b-2 border-transparent">
                       <div className="w-10 h-10 border border-white/30 bg-white/10 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white/20"></div>
                       </div>
                       <div className="w-16 h-16 rounded-full border-2 border-[#3B82F6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-black">
                          <div className="w-12 h-12 bg-white rounded-full"></div>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 relative">
                         <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                       </div>
                     </div>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Bottom Nav indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-colors ${i === activeSlide ? 'bg-brand-blue w-6' : 'bg-outline'}`} 
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
