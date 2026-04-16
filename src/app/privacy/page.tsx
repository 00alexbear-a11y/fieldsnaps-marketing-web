import LegalLayout from "@/components/layout/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      
      <h2>1. Information We Collect</h2>
      <p>[INSERT: DATA COLLECTION SPECIFICS (e.g. Account Data, Job Site Data, Device Info)]</p>

      <h2>2. How We Use Your Information</h2>
      <p>[INSERT: SPECIFIC PURPOSES OF USE, INCLUDING SERVICE PROVISION AND SUPPORT]</p>

      <h2>3. Third-Party Data Sharing & AI Models</h2>
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-md my-6 not-prose">
         <strong className="text-slate-900 block mb-2">[INSERT: AI MODEL DATA USAGE]</strong>
         <p className="text-sm text-slate-600">
           We utilize third-party AI providers to process audio transcripts and photos for feature delivery.
           [INSERT: SPECIFIC GOOGLE GEMINI / OPENAI OPT-OUT NOTICES REGARDING MODEL TRAINING IF APPLICABLE TO YOUR TIER]
         </p>
      </div>

      <h2>4. Data Retention and Security</h2>
      <p>[INSERT: ENCRYPTION AND RETENTION TIMELINE STANDARDS]</p>

      <h2>5. Your Rights & GDPR/CCPA Compliance</h2>
      <p>[INSERT: EXPLANATION OF USER RIGHTS UNDER CALIFORNIA CCPA / EU GDPR]</p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 not-prose rounded-r-md">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Request Data Deletion</h3>
        <p className="text-blue-800 text-sm mb-4">
          Under applicable data protection laws, you have the right to request a complete deletion of your personal data from FieldSnaps systems. To submit a verifiable data deletion request, please contact our Privacy Team directly at the email below.
        </p>
        <a 
          href="mailto:privacy@fieldsnaps.com?subject=Data Deletion Request" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors text-sm"
        >
          Email privacy@fieldsnaps.com
        </a>
      </div>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>[INSERT: NOTIFICATION PROCEDURES FOR POLICY UPDATES]</p>

    </LegalLayout>
  );
}
