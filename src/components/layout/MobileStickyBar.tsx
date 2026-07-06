"use client";

import Link from "next/link";
import { CalendarDays, UtensilsCrossed } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-pepper/98 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2 gap-px bg-white/10">
        <Link
          href="/menu"
          className="font-title flex min-h-[3.25rem] items-center justify-center gap-2 bg-pepper py-3 text-[11px] text-white touch-manipulation active:bg-pepper/80"
        >
          <UtensilsCrossed className="h-5 w-5 shrink-0 text-honey" />
          Menu
        </Link>
        <Link
          href="/book"
          className="font-title flex min-h-[3.25rem] items-center justify-center gap-2 bg-honey py-3 text-[11px] text-pepper touch-manipulation active:bg-honey/90"
        >
          <CalendarDays className="h-5 w-5 shrink-0" />
          Book
        </Link>
      </div>
    </div>
  );
}
