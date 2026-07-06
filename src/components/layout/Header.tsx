"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        "pt-[env(safe-area-inset-top,0px)]",
        scrolled || mobileOpen
          ? "bg-pepper/97 shadow-lg shadow-pepper/20 backdrop-blur-md"
          : "bg-pepper/85 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none",
        !scrolled && !mobileOpen && isHome && "lg:bg-gradient-to-b lg:from-pepper/75 lg:to-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo variant="primary" onDark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-title text-[11px] transition-colors hover:text-honey",
                pathname === item.href ? "nav-link-active text-honey" : "text-white/90"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/book"
            className="btn-premium font-title rounded-sm bg-honey px-5 py-2.5 text-[11px] text-pepper hover:bg-honey/90"
          >
            {siteConfig.bookingCta}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-white touch-manipulation transition-colors active:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-enter fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-pepper lg:hidden">
          <nav className="flex flex-col px-4 py-2 pb-24" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-title flex min-h-[3rem] items-center border-b border-white/5 text-[11px] touch-manipulation transition-colors",
                  pathname === item.href ? "text-honey" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-premium font-title mt-6 flex min-h-[3rem] items-center justify-center rounded-sm bg-honey text-[11px] text-pepper touch-manipulation"
            >
              {siteConfig.bookingCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
