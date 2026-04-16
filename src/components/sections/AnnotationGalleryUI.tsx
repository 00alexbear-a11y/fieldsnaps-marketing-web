"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link2, CheckCircle2 } from "lucide-react";

const photos = [
  "0027094F-2B23-406F-A9D6-327833E9E6D8.jpeg",
  "01F6AA5D-64A2-4281-B194-C64A00049D12.jpeg",
  "105AE278-6430-45E5-85DE-D4CB3542BA74.jpeg",
  "1732A370-DE8B-4022-9CD5-56695A2DC748.jpeg",
  "1FBAE33B-FC5D-464E-BD9E-D73BCF4ECE2D.jpeg",
  "20C555FD-AE96-4C55-AEF5-5AFCDEC993BC.jpeg",
  "2594229B-40F0-4106-920A-6B65E7B4C983.jpeg",
  "2AF8BB22-59E2-4D1A-8DBF-B1567EAEE9FC.jpeg",
  "366639C0-ECD0-4A62-9ECE-86DAA6A83BA9.jpeg",
  "3692DB7D-19DD-435D-B331-D4821E8BA652.jpeg",
  "3F0F7E52-F468-46E6-AA95-20A4C4BA7392.jpeg",
  "3F784960-D6CE-46CC-9B4A-E42186DAE6A3.jpeg",
  "437F68FE-BC9A-4288-9221-80B17DE81790.jpeg",
  "44882754-A801-438C-A00D-A89756B17BAC.jpeg",
  "4D43965E-C82E-4DA3-A54B-E58D8EE02B56.jpeg"
];

export default function AnnotationGalleryUI({ isActive }: { isActive: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      const t = setTimeout(() => setStep(0), 1000);
      return () => clearTimeout(t);
    }
    
    const timings = [
      2300, // 0 -> 1: drawing arrow
      1200, // 1 -> 2: show saved
      2000, // 2 -> 3: scale to gallery
      2000, // 3 -> 4: select photos
    ];

    let currentStep = 0;
    
    const nextStep = () => {
      if (currentStep >= timings.length) return;
      setTimeout(() => {
        setStep(s => s + 1);
        currentStep++;
        nextStep();
      }, timings[currentStep - 1] ?? timings[0]);
    };
    
    // Start timeline
    const initialDelay = setTimeout(() => {
       setStep(1);
       currentStep = 1;
       nextStep();
    }, timings[0]);

    return () => {
       clearTimeout(initialDelay);
       // Hacky cleanup for sequence since it's just a demo loop
    };
  }, [isActive]);

  return (
    <div className="w-full h-full bg-[#111111] flex flex-col relative overflow-hidden font-sans pointer-events-none">
      
      {/* State 0 & 1: Annotation View */}
      <AnimatePresence>
        {step < 2 && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-30 bg-black flex flex-col"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-90"
              style={{ backgroundImage: `url('/jobsite/${photos[0]}')` }}
            />
            
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 pt-12 bg-black/60 shadow-md backdrop-blur-md relative z-40 text-white">
               <span className="text-[12px] font-bold tracking-widest uppercase">Annotate</span>
               <span className="text-[10px] bg-[#3B82F6] px-3 py-1 flex items-center justify-center font-bold uppercase rounded-full shadow-sm">Save</span>
            </div>

            {/* Drawing Canvas */}
            <div className="absolute inset-0 z-40 flex items-center justify-center">
               <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] transform -translate-y-12">
                 <defs>
                   <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" fill="#ef4444">
                     <polygon points="0 0, 6 3, 0 6" />
                   </marker>
                 </defs>
                 <motion.line
                   x1="40" y1="160" x2="140" y2="60"
                   stroke="#ef4444"
                   strokeWidth="10"
                   strokeLinecap="round"
                   markerEnd="url(#arrowhead)"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                 />
               </svg>
            </div>

            {/* Toast: Saved */}
            <AnimatePresence>
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: -20, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, scale: 0.9, x: "-50%" }}
                  className="absolute top-28 left-1/2 bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 z-50 whitespace-nowrap"
                >
                  <CheckCircle2 size={16} className="text-green-500" />
                  Saved to Database
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* State 2, 3, 4: Brutalist Gallery View */}
      <div className="absolute inset-0 z-10 flex flex-col pt-[52px] bg-[var(--bg-deep)]">
         <div className="flex justify-between items-center px-4 py-2 bg-[var(--bg-deep)]/80 border-b border-[var(--border-glass)] sticky top-0 z-10 backdrop-blur-md">
            <span className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">{photos.length} Media Items</span>
            <button className={`text-sm font-bold px-3 py-1.5 rounded-full transition-colors shadow-sm ${step >= 3 ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--surface-button)] text-[var(--text-primary)] border border-[var(--border-glass)]'}`}>
              {step >= 3 ? 'Cancel' : 'Select'}
            </button>
         </div>

         <div className="px-4 py-3 flex gap-2 border-b border-[var(--border-glass)]">
            <button className="flex-1 py-1.5 rounded-lg text-sm font-bold transition-all shadow-md bg-[var(--accent-primary)] text-[var(--accent-primary-text)] border border-transparent">
              Site Photos
            </button>
            <button className="flex-1 py-1.5 rounded-lg text-sm font-bold transition-all shadow-md bg-transparent text-[var(--text-secondary)] border border-[var(--border-glass)]">
              Scanned Docs
            </button>
         </div>

         <div className="pd-timeline hide-scrollbar scroll-content flex flex-col gap-6 p-4 pb-32 flex-1 overflow-y-auto overflow-x-hidden">
            <div className="pd-timeline-group">
              <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="pd-timeline-date text-sm font-bold text-[var(--text-primary)] tracking-tight uppercase border-none pb-0">TODAY</h3>
              </div>
              <div className="pd-timeline-grid" style={{ '--grid-cols': 4 } as React.CSSProperties}>
              {photos.map((src, i) => (
                <div key={i} className={`pd-timeline-item group relative ${step >= 3 ? 'shadow-sm' : ''}`}>
                   <motion.img 
                      src={`/jobsite/${src}`} 
                      alt="" 
                      className="pd-timeline-img w-full h-full object-cover"
                      initial={{ scale: 1, borderRadius: "4px" }}
                      animate={{ 
                         scale: step >= 3 ? 0.92 : 1, 
                         borderRadius: step >= 3 ? "8px" : "4px" 
                      }}
                      transition={{ duration: 0.2 }}
                   />
                   
                   {/* Persist Arrow on first image thumbnail */}
                   {i === 0 && (
                     <div className="absolute inset-0 pointer-events-none scale-[0.35] origin-center">
                       <svg width="200" height="200" viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] transform -translate-y-12 shrink-0">
                         <defs>
                           <marker id="arrowhead-persistent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" fill="#ef4444">
                             <polygon points="0 0, 6 3, 0 6" />
                           </marker>
                         </defs>
                         <line
                           x1="40" y1="160" x2="140" y2="60"
                           stroke="#ef4444"
                           strokeWidth="10"
                           strokeLinecap="round"
                           markerEnd="url(#arrowhead-persistent)"
                         />
                       </svg>
                     </div>
                   )}

                   {/* FieldSnaps Actual Selection Circle */}
                   {step >= 3 && (
                     <motion.div 
                       initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: i * 0.04 }} // Stagger cascade
                       className="absolute top-1 right-1 z-10 drop-shadow-md"
                     >
                       <CheckCircle2 size={24} className="text-blue-500 bg-white rounded-full border-[1.5px] border-white" fill="white" />
                     </motion.div>
                   )}
                </div>
              ))}
            </div>
         </div>
         </div>

         {/* Bottom Bar: Action (Floating Pill style from actual app) */}
         <AnimatePresence>
           {step >= 3 && (
             <motion.div
               initial={{ y: 50, opacity: 0, x: "-50%" }}
               animate={{ y: 0, opacity: 1, x: "-50%" }}
               exit={{ y: 50, opacity: 0, x: "-50%" }}
               className="absolute bottom-24 left-1/2 w-[90%] max-w-sm bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl z-50 p-2 py-3 flex justify-between items-center px-4 backdrop-blur-xl"
             >
                <span className="text-white font-bold text-[13px] tracking-tight">{photos.length} Selected</span>
                <div className="flex gap-2">
                   <button className="bg-white text-black text-sm font-bold px-5 py-2 rounded-xl transition-all shadow-md">
                      <AnimatePresence mode="wait">
                        {step === 4 ? (
                          <motion.div key="copied" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1.5">
                             <CheckCircle2 size={16} /> Shared
                          </motion.div>
                        ) : (
                          <motion.div key="generate" exit={{ opacity: 0, scale: 0.9 }} className="flex items-center gap-1.5">
                             <Link2 size={16} /> Share
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </button>
                </div>
             </motion.div>
           )}
         </AnimatePresence>
      </div>

    </div>
  );
}
