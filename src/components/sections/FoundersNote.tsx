export default function FoundersNote() {
  return (
    <section className="py-24 px-8 max-w-[1000px] mx-auto relative z-10">
      <div className="border-l-8 border-brand-blue pl-8 md:pl-16 relative">
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-headline font-black uppercase tracking-tighter leading-none mb-8">
          THE BREAKING <br/><span className="text-brand-blue">POINT.</span>
        </h2>
        
        <div className="space-y-8 text-[19px] md:text-2xl font-medium text-primary/90 leading-relaxed max-w-3xl">
          <p>
            We built FieldSnaps because the software industry is actively punishing contractors.
          </p>
          <p>
            It started with a breaking point: opening a personal phone and seeing pictures of family and friends sitting right next to pictures of 2x4 framing. Contractors desperately needed a way to cleanly separate their work from their personal lives. 
          </p>
          <p>
            But the &quot;solutions&quot; on the market were completely out of touch. Software giants wanted to charge $1,200 a year just for a basic photo app, forcing teams into &quot;three-user minimums&quot; for seats they didn&apos;t even have. It felt like tradesmen were being taken for a ride just for trying to get organized.
          </p>
          <p>
            Worse, that $1,200 didn&apos;t even run the business. Crews still had to juggle disjointed apps to track time, input daily logs, and handle client texts from their personal phone numbers. The <strong className="text-brand-blue">App Fatigue</strong> was entirely out of control, and there was nothing out there that did it all.
          </p>
          <p>
            FieldSnaps was built to solve both of these problems. First, it funnels all your notes, photos, and messages into one central system on the cloud, keeping your personal phone totally clean. 
          </p>
          <p>
            Second, we know exactly what it feels like to be nickeled-and-dimed by corporate tech companies, and we refuse to operate that way.
          </p>
          <p className="font-black text-2xl md:text-3xl uppercase tracking-widest text-brand-blue pb-4">
            No nonsense. No BS.<br/>No hidden fees. No user minimums.
          </p>
        </div>

        {/* Signature Box */}
        <div className="mt-12 inline-block border-2 border-primary p-6 relative">
           <div className="absolute -top-3 left-4 bg-background px-2 font-mono text-sm font-bold tracking-widest uppercase">The Team</div>
           <div className="font-headline font-black text-2xl uppercase tracking-widest text-primary">FIELD<span className="text-brand-blue">SNAPS</span></div>
           <div className="font-mono text-sm font-bold tracking-widest uppercase text-primary/50 mt-1">Built for the Trades</div>
        </div>

      </div>
    </section>
  );
}
