import LegalLayout from "@/components/layout/LegalLayout";

export default function CookiePage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="Termly Live Sync">
       <iframe 
          src="https://app.termly.io/policy-viewer/policy.html?policyUUID=e829e9d0-e203-42fe-a7ee-907764d49f9a" 
          title="Cookie Policy"
          className="w-full border-none min-h-[80vh]"
        />
    </LegalLayout>
  );
}
