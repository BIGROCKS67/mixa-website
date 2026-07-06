"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("mixa-cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-20 z-50 rounded-sm bg-pepper p-4 text-white shadow-xl lg:bottom-6 lg:left-auto lg:right-6 lg:max-w-md">
      <p className="font-body text-sm leading-relaxed text-sesame/90">
        We use cookies to improve your experience and analyse site traffic. See our privacy policy for details.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("mixa-cookie-consent", "accepted");
            setVisible(false);
          }}
          className="font-title rounded-sm bg-honey px-4 py-2 text-[11px] text-pepper"
        >
          Accept
        </button>
        <Link href="/contact" className="rounded-sm px-4 py-2 text-sm text-sesame hover:text-white">
          Learn more
        </Link>
      </div>
    </div>
  );
}
