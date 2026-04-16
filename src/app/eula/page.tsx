import LegalLayout from "@/components/layout/LegalLayout";

export default function EULAPage() {
  return (
    <LegalLayout title="End User License Agreement (EULA)" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      
      <p className="lead border-b border-slate-200 pb-6 mb-8 text-slate-600 font-medium tracking-wide">
        This End User License Agreement represents a legal agreement between You (either an individual or a single entity) and FieldSnaps for the FieldSnaps software product, which includes computer software and may include associated media, printed materials, and online or electronic documentation.
      </p>

      <h2>1. Apple App Store Requirements</h2>
      <div className="bg-slate-50 border-l-4 border-slate-400 p-6 my-6 not-prose rounded-r-md">
        <strong className="text-slate-900 block mb-2">[INSERT: APPLE STANDARD EULA CLAUSES]</strong>
        <p className="text-sm text-slate-700">
          This Agreement is concluded between FieldSnaps and the End-User only, and not with Apple. FieldSnaps, not Apple, is solely responsible for the Licensed Application and the content thereof. 
          [INSERT: REMAINDER OF APPLE CUSTOM EULA BOILERPLATE]
        </p>
      </div>

      <h2>2. Grant of License</h2>
      <p>[INSERT: SCOPE AND GRANT OF LICENSE DETAILS]</p>

      <h2>3. Restrictions on Use</h2>
      <p>[INSERT: REVERSE ENGINEERING, SUB-LICENSING, RENTING, AND FAIR USE RESTRICTIONS]</p>

      <h2>4. Termination</h2>
      <p>[INSERT: TERMINATION CONDITIONS FOR THE LICENSE]</p>

    </LegalLayout>
  );
}
