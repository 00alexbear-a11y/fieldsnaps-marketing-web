import LegalLayout from "@/components/layout/LegalLayout";

export default function RefundPage() {
  return (
    <LegalLayout title="Return Policy" lastUpdated="Termly Live Sync">
       <iframe 
          src="https://app.termly.io/policy-viewer/policy.html?policyUUID=39104f12-b902-4be8-8de1-ca0d0e12d082" 
          title="Return Policy"
          className="w-full border-none min-h-[80vh]"
        />
    </LegalLayout>
  );
}
