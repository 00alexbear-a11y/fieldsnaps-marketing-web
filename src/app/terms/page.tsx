import LegalLayout from "@/components/layout/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="Termly Live Sync">
       <iframe 
          src="https://app.termly.io/policy-viewer/policy.html?policyUUID=9ee34cb9-18c8-4985-a9cd-1f622b3b75f4" 
          title="Terms of Service"
          className="w-full border-none min-h-[80vh]"
        />
    </LegalLayout>
  );
}
