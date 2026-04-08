"use client";

import { motion } from "framer-motion";
import { Search, Mic, MessageSquare, Camera, ClipboardCheck, ArrowDown } from "lucide-react";

export default function FeatureDataFunnel() {
  const features = [
    {
      icon: <Search size={40} className="text-brand-blue" />,
      title: "The Owner's Brain",
      subtitle: "Find Anything Instantly",
      pain: "You are forced to keep every project detail in your head. When a guy on site needs to know a paint color, they have to stand around waiting for you to check your notes.",
      fix: "FieldSnaps acts as the 'Owner's Brain' safely locked on the cloud. Your crew gets instant access to the details they need to keep moving, and they never see your personal stuff.",
      borderColor: "border-brand-blue",
      headerBg: "bg-primary text-background",
      wireframe: (
        <div className="mt-6 border-2 border-primary bg-background p-4 opacity-90 shadow-xl">
           <div className="flex items-center gap-2 border-2 border-outline p-2 mb-4 bg-white text-primary">
              <Search size={16} className="text-brand-blue" /> <span className="font-mono text-sm font-bold uppercase">“guest bath paint color”</span>
           </div>
           <div className="border border-outline border-l-4 border-l-brand-blue p-3 bg-white">
              <p className="font-mono text-[10px] uppercase font-bold text-outline tracking-wider mb-1">Found In: 123 Main St / SMS Inbox</p>
              <p className="text-sm font-medium text-primary">"Hey boss, the client approved Sherwin Williams Alabaster on the trim."</p>
           </div>
        </div>
      )
    },
    {
      icon: <Camera size={40} className="text-brand-blue" />,
      title: "Isolated Cloud Camera",
      subtitle: "Keep Work Off Your Phone",
      pain: "Your phone's camera roll is stuffed with job site photos mixed with pictures of your kids. And texting those photos ruins the image quality.",
      fix: "Take photos straight into the FieldSnaps cloud. They never save to your personal phone. You can draw on them, and share them with a simple web link—no app needed.",
      borderColor: "border-primary",
      headerBg: "bg-white text-primary border border-outline",
      wireframe: (
        <div className="mt-6 border-2 border-primary bg-background p-4 grid grid-cols-3 gap-2 opacity-90 shadow-xl">
           <div className="aspect-square bg-outline/20 border-2 border-outline flex items-center justify-center"><Camera size={24} className="opacity-30" /></div>
           <div className="aspect-square bg-brand-blue/5 border-2 border-brand-blue flex items-center justify-center relative">
             <div className="absolute inset-x-2 inset-y-4 border-2 border-red-500 text-[10px] flex items-center justify-center text-red-500 font-bold uppercase transform -rotate-6">MARKUP</div>
           </div>
           <div className="aspect-square bg-primary text-background border-2 border-primary flex flex-col items-center justify-center cursor-pointer hover:bg-brand-blue transition-colors">
              <span className="text-2xl leading-none">+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest mt-1">UPLOAD</span>
           </div>
        </div>
      )
    },
    {
      icon: <Mic size={40} className="text-brand-blue" />,
      title: "Ghost Reporter",
      subtitle: "Voice-to-Action AI",
      pain: "Typing out daily logs on a tiny phone screen at the end of a long day is a nightmare.",
      fix: "Just tap the mic and talk while you drive home. FieldSnaps listens, cleans up what you said, and turns it into a perfect bulleted daily log automatically.",
      borderColor: "border-primary",
      headerBg: "bg-white text-primary border border-outline",
      wireframe: (
        <div className="mt-6 border-2 border-primary bg-background p-4 opacity-90 shadow-xl">
           <div className="flex items-center gap-2 mb-4 h-8 px-4 bg-primary text-background rounded-full w-max">
              <Mic className="text-brand-blue" size={14} />
              <div className="flex items-center gap-[2px] h-4">
                {[2,4,6,3,8,5,2,4,7,3,2].map((h, j) => <div key={j} className="bg-brand-blue w-1 rounded-[1px] opacity-100" style={{height: `${h*2}px`}}></div>)}
              </div>
              <span className="text-[10px] font-mono font-bold text-brand-blue ml-2 uppercase tracking-widest">Processing...</span>
           </div>
           <ul className="space-y-3 border-l-2 border-outline pl-4 font-mono text-xs uppercase font-bold tracking-tight text-primary">
              <li className="flex items-start gap-2"><div className="w-2 h-2 mt-0.5 bg-primary rounded-none"></div> Plumber fixed master leak</li>
              <li className="flex items-start gap-2"><div className="w-2 h-2 mt-0.5 bg-brand-blue rounded-none"></div> FRAMING DELAYED TO THURSDAY [FLAGGED]</li>
           </ul>
        </div>
      )
    },
    {
      icon: <MessageSquare size={40} className="text-brand-blue" />,
      title: "Unified SMS Inbox",
      subtitle: "Track Customer Texts",
      pain: "Subs won't download apps, and customers text you at all hours. Your project details get totally scattered across 40 different Apple Message threads.",
      fix: "We give your project its own phone number. Subs and customers send normal text messages to it, and FieldSnaps tracks all their responses perfectly into your dashboard.",
      borderColor: "border-primary",
      headerBg: "bg-white text-primary border border-outline",
      wireframe: (
        <div className="mt-6 border-2 border-primary bg-background p-4 flex flex-col gap-3 opacity-90 shadow-xl">
           <div className="bg-white border-2 border-outline p-3 rounded-none max-w-[85%] self-start relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-outline"></div>
              <p className="font-mono text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Subcontractor (Mike) - 4:15 PM</p>
              <p className="text-sm font-medium text-primary">We're totally short on 3/4 plywood for tomorrow.</p>
           </div>
           <div className="bg-primary text-background p-3 rounded-none max-w-[85%] self-end relative">
              <div className="absolute top-0 right-0 w-1 h-full bg-brand-blue"></div>
              <p className="font-mono text-[9px] font-bold text-brand-blue uppercase tracking-widest mb-1">FieldSnaps AI Core</p>
              <p className="text-sm">Logged. Task added: <span className="text-brand-blue font-bold uppercase underline">Order Plywood</span></p>
           </div>
        </div>
      )
    },
    {
        icon: <ClipboardCheck size={40} className="text-brand-blue" />,
        title: "AI Spotter",
        subtitle: "Automated To-Do Lists",
        pain: "A sub texts you that they are out of lumber, but the text gets lost and nobody orders the wood for Monday.",
        fix: "FieldSnaps reads texts for you. If a sub texts about missing lumber, the app instantly sees it and adds 'Order Lumber' straight onto your to-do list.",
        borderColor: "border-primary",
        headerBg: "bg-white text-primary border border-outline"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-8 max-w-[1000px] mx-auto relative z-10 flex flex-col gap-12">
      
      {/* TOP: Feature List */}
      <div className="flex flex-col gap-12">
        {features.map((feature, i) => (
          <div key={i} className={`flex flex-col md:flex-row gap-0 border-4 border-outline/50 relative overflow-hidden bg-white`}>
            
            {/* Left Header Box */}
            <div className={`md:w-1/3 flex flex-col items-center text-center justify-center p-8 ${feature.headerBg}`}>
              <div className="mb-4 bg-background/10 p-4 rounded-full">{feature.icon}</div>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tighter mb-2 leading-none md:max-w-xs">{feature.title}</h3>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60 mix-blend-luminosity">{feature.subtitle}</div>
            </div>
            
            {/* Right Logic Box */}
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <p className="leading-relaxed font-medium mb-6 text-primary text-xl">
                <strong className="text-red-500 uppercase tracking-widest text-sm block mb-1">Old Way (Pain)</strong> 
                {feature.pain}
              </p>
              <p className="leading-relaxed font-medium text-primary text-xl mb-6">
                <strong className="text-brand-blue uppercase tracking-widest text-sm block mb-1">New Way (FieldSnaps)</strong> 
                {feature.fix}
              </p>
              {feature.wireframe && (
                 <div className="w-full max-w-lg mt-auto">
                    {feature.wireframe}
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Connection Downward Arrow */}
      <div className="w-full flex justify-center -mt-4 mb-4">
         <ArrowDown size={48} className="text-brand-blue opacity-50" />
      </div>

      {/* BOTTOM: Unified Database Visual Centerpiece */}
      <div className="w-full flex flex-col items-center text-center relative">
        <div className="bg-primary text-background p-12 border-4 border-brand-blue shadow-2xl relative w-full lg:w-[800px] flex flex-col items-center">
            
            <div className="w-24 h-24 bg-brand-blue rounded flex items-center justify-center relative mb-8 border-4 border-background">
               <span className="font-mono font-black text-4xl z-10 uppercase tracking-tighter">AI</span>
            </div>
            
            <h3 className="font-headline font-bold text-4xl uppercase tracking-tighter mb-4 leading-none">
              THE SINGLE SOURCE OF TRUTH.
            </h3>
            <p className="font-medium text-xl text-background/80 max-w-[600px]">
                Every photo taken, every text message sent, and every voice note recorded flows straight into this single database. Nothing gets lost. Everything is searchable.
            </p>
        </div>
      </div>

    </section>
  );
}
