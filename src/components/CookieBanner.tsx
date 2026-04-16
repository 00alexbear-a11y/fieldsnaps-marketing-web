"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const CONSENT_KEY = "fieldsnaps_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#111111] text-[#EBEAE6] border-t-4 border-[#3B82F6] shadow-2xl">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 pr-4">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-1">Cookie Notice</p>
          <p className="text-sm text-[#EBEAE6]/80 leading-relaxed">
            We use cookies to improve your experience, analyze site traffic, and personalize content. By clicking{" "}
            <strong className="text-white">Accept</strong>, you consent to our use of cookies.{" "}
            <Link href="/cookie" className="underline text-[#3B82F6] hover:text-white transition-colors">
              Learn more
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="font-mono text-xs font-bold uppercase tracking-widest text-[#EBEAE6]/50 hover:text-white transition-colors px-4 py-2 border border-[#EBEAE6]/20 hover:border-white/40"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="font-mono text-xs font-bold uppercase tracking-widest bg-[#3B82F6] text-white px-6 py-2 hover:bg-blue-500 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="text-[#EBEAE6]/40 hover:text-white transition-colors ml-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
