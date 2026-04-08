export default function FoundersNote() {
  return (
    <section className="py-24 px-8 max-w-[1000px] mx-auto relative z-10">
      <div className="border-l-8 border-brand-blue pl-8 md:pl-16 relative">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-headline font-black uppercase tracking-tighter leading-none mb-8">
          THE END OF <br/><span className="text-brand-blue">APP FATIGUE.</span>
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl font-medium text-primary/90 leading-relaxed max-w-3xl">
          <p>
            I built FieldSnaps because the software industry is actively punishing contractors.
          </p>
          <p>
            I hit a breaking point when I opened my phone and saw pictures of my newborn baby sitting right next to pictures of 2x4 framing. I desperately needed to separate my work from my personal life. 
          </p>
          <p>
            But when I looked for a solution, a software company wanted to charge me $1,200 a year just for a photo app, and forced me into a "three-user minimum" for seats I didn't even have. It felt like I was being taken for a ride just because I didn't have a massive crew.
          </p>
          <p>
            Worse, that $1,200 didn't even run my business. I still had to juggle 5 other separate apps just to track time, notes, and texts. The <strong className="text-brand-blue">App Fatigue</strong> was out of control. There was nothing out there that did it all.
          </p>
          <p>
            I built FieldSnaps to finally solve both problems. First, to put all your notes, photos, and messages into one central "owner's brain" on the cloud, keeping your personal phone totally clean. 
          </p>
          <p>
            Second, to create a tool with complete respect for the guys actually doing the work. I know what it feels like to be nickeled-and-dimed, and I refuse to do that to you.
          </p>
          <p className="font-black text-2xl md:text-3xl uppercase tracking-widest text-brand-blue pb-4">
            No nonsense. No BS.<br/>No hidden fees. No user minimums.
          </p>
        </div>

        {/* Signature Box */}
        <div className="mt-12 inline-block border-2 border-primary p-6 relative">
           <div className="absolute -top-3 left-4 bg-background px-2 font-mono text-sm font-bold tracking-widest uppercase">The Builder</div>
           <div className="font-headline font-black text-2xl uppercase tracking-widest text-primary">FIELD<span className="text-brand-blue">SNAPS</span></div>
           <div className="font-mono text-sm font-bold tracking-widest uppercase text-primary/50 mt-1">Built for the Trades</div>
        </div>

      </div>
    </section>
  );
}
