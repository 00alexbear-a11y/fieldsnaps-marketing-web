import LegalLayout from "@/components/layout/LegalLayout";

export default function EULAPage() {
  return (
    <LegalLayout title="End User License Agreement" lastUpdated="Apple Standard EULA">
       <iframe 
          src="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
          title="End User License Agreement"
          className="w-full border-none min-h-[80vh]"
        />
    </LegalLayout>
  );
}
