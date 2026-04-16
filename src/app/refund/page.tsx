import LegalLayout from "@/components/layout/LegalLayout";

export default function RefundPage() {
  return (
    <LegalLayout title="100-Day Guarantee & Refund Policy" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      
      <p className="lead font-medium text-slate-700 bg-green-50 p-6 rounded-md border border-green-200">
        We stand by FieldSnaps 100%. Our marketing promises a full 100-Day Money-Back Guarantee, and this page documents exactly how that works to ensure absolute transparency.
      </p>

      <h2>1. The 100-Day Full Refund Guarantee</h2>
      <p>
        [INSERT: 100-DAY GUARANTEE ELIGIBILITY DETAILS] <br />
        If you are not entirely satisfied with FieldSnaps within your first 100 days of joining as a paid subscriber, you are entitled to a full 100% refund of all subscription fees paid in that window.
      </p>
      
      <h3>1.1 Eligibility Requirements</h3>
      <p>
        [INSERT: SPECIFIC ELIGIBILITY CRITERIA (e.g. Must have completed onboarding, must request via support email)]
      </p>

      <h2>2. Standard Cancellation</h2>
      <p>
        [INSERT: CANCELLATION PROCESS OUTSIDE OF THE 100 DAY WINDOW]
      </p>

      <h2>3. App Store Billing Subscriptions</h2>
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-md my-6 not-prose">
        <strong className="text-slate-900 block mb-2">[INSERT: APP STORE BILLING DISCLAIMER]</strong>
        <p className="text-sm text-slate-600">
          Please note: If you subscribed via In-App Purchase on an iOS or Android device, the transaction is handled entirely by Apple or Google. FieldSnaps cannot directly refund those directly from our system; you must request the refund through your Apple ID or Google Play account management.
        </p>
      </div>

    </LegalLayout>
  );
}
