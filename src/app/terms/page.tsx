import LegalLayout from "@/components/layout/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      
      <h2>1. Acceptance of Terms</h2>
      <p>[INSERT: STANDARD ACCEPTANCE AND BINDING ARBITRATION CLAUSE]</p>
      
      <h2>2. Description of Service</h2>
      <p>[INSERT: SERVICE DESCRIPTION FOR FIELDSNAPS PLATFORM]</p>

      <h2>3. Text Messaging & Communications Compliance (TCPA)</h2>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 not-prose">
        <strong className="text-amber-900 block mb-2">[CRITICAL TCPA LIABILITY WALL]</strong>
        <p className="text-amber-800 text-sm">
          [INSERT: TCPA LIABILITY CLAUSE] 
        </p>
        <p className="text-amber-800 text-sm mt-2">
          By utilizing the FieldSnaps SMS communication features to contact your clients, subcontractors, or employees, you explicitly represent and warrant that you have obtained all necessary prior express written consent required by the Telephone Consumer Protection Act (TCPA) and other applicable laws. FieldSnaps acts solely as a technology platform providing message routing, not as the sender. You agree to fully indemnify and hold FieldSnaps harmless against any claims, fines, or damages arising from your failure to obtain required consent.
        </p>
      </div>

      <h2>4. Artificial Intelligence & Output Disclaimer</h2>
      <div className="bg-slate-50 border-l-4 border-slate-400 p-4 my-6 not-prose">
        <strong className="text-slate-700 block mb-2">[AI OUTPUT DISCLAIMER]</strong>
        <p className="text-slate-600 text-sm">
          [INSERT: AI OUTPUT DISCLAIMER COPIED FROM TERMLY/ATTORNEY]
        </p>
        <p className="text-slate-600 text-sm mt-2">
           FieldSnaps employs artificial intelligence features to parse notes, extract tasks, and generate summaries. While designed to operate objectively on provided transcripts without hallucination, all AI-generated outputs must be considered suggestions. The User (Contractor) maintains ultimate responsibility for verifying the accuracy of any drafted change orders, notes, and task lists. FieldSnaps holds no liability for omissions, errors, or financial damages resulting from reliance on AI-generated documentation.
        </p>
      </div>

      <h2>5. User Account Responsibilities</h2>
      <p>[INSERT: USER CONDUCT RULES AND ACCOUNT TERMINATION POLICY]</p>

      <h2>6. Governing Law</h2>
      <p>[INSERT: GOVERNING LAW AND JURISDICTION CLAUSE]</p>

    </LegalLayout>
  );
}
