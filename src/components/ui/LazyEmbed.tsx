"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LazyEmbedProps = {
  title: string;
  src: string;
  className?: string;
  height?: string;
};

export function LazyEmbed({ title, src, className, height = "min-h-[420px]" }: LazyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("w-full", height, className)}>
      {loaded ? (
        <iframe
          title={title}
          src={src}
          className={cn("h-full min-h-[inherit] w-full border-0", height)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className={cn(
            "flex h-full min-h-[inherit] w-full items-center justify-center bg-mint/15",
            height
          )}
          aria-hidden
        >
          <span className="font-body text-sm text-pepper/45">Loading map…</span>
        </div>
      )}
    </div>
  );
}
