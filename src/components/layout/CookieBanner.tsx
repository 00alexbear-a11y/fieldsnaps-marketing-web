"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function CookieBanner() {
  const [consentGranted, setConsentGranted] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user already consented on previous visit
    const storedConsent = localStorage.getItem("fieldsnaps_cookie_consent");
    if (storedConsent === "true") {
      setConsentGranted(true);
    } else if (storedConsent === "false") {
      setConsentGranted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("fieldsnaps_cookie_consent", "true");
    setConsentGranted(true);
  };

  const handleDecline = () => {
    localStorage.setItem("fieldsnaps_cookie_consent", "false");
    setConsentGranted(false);
  };

  return (
    <>
      {/* 
        Mechanical Script Injection Gate:
        These scripts ONLY render in the DOM after explicit user consent is granted.
      */}
      {consentGranted === true && (
        <>
          {/* Example Analytics Script wrapper */}
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                console.log("Analytics scripts loaded mechanically after explicit consent.");
                // Inject actual GA or tracking codes here
              `,
            }}
          />
        </>
      )}

      {/* Banner UI: Only show if consent has not been recorded yet */}
      {consentGranted === null && (
        <div className="fixed bottom-0 left-0 right-0 lg:bottom-6 lg:left-6 lg:right-auto lg:w-[420px] bg-white border border-slate-200 shadow-2xl z-[9999] p-6 lg:rounded-lg font-sans">
          <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest font-mono">Cookie Compliance</h3>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            We use technical and analytics cookies to ensure the platform works and to measure performance. None of our analytics scripts load until you click "Accept" to comply with GDPR/ePrivacy. 
            Read our <a href="/cookie" className="text-blue-600 underline hover:text-blue-800">Cookie Policy</a> for details.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-widest transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2 px-4 rounded text-xs uppercase tracking-widest transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
