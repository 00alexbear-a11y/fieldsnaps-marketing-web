import LegalLayout from "@/components/layout/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="Termly Live Sync">
       <iframe 
          src="https://app.termly.io/policy-viewer/policy.html?policyUUID=c2a0a195-f1d8-4536-a77b-457c002afef5" 
          title="Privacy Policy"
          className="w-full border-none min-h-[80vh]"
        />
    </LegalLayout>
  );
}
