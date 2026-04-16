import LegalLayout from "@/components/layout/LegalLayout";

export default function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      
      <h2>1. What Are Cookies</h2>
      <p>[INSERT: EXPLANATION OF COOKIES AND TRACKING TECHNOLOGIES]</p>

      <h2>2. How We Use Cookies</h2>
      <p>[INSERT: PURPOSE OF ESSENTIAL VS ANALYTICS AND MARKETING COOKIES]</p>

      <h2>3. Third-Party Cookies</h2>
      <p>[INSERT: LIST OF THIRD-PARTY TRACKING INTEGRATIONS (e.g., Google Analytics, Vercel Web Vitals)]</p>

      <h2>4. Managing Your Consent</h2>
      <p>
        Upon your first visit to our site, you were presented with a Cookie Consent Banner. Our website mechanically blocks non-essential analytics and tracking scripts until you explicitly click "Accept" or "Allow All."
      </p>
      <p>[INSERT: INSTRUCTIONS ON HOW USERS CAN REVOKE CONSENT VIA BROWSER SETTINGS OR IN-APP MECHANISMS]</p>

    </LegalLayout>
  );
}
