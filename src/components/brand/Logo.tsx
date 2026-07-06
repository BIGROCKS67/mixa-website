import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IMAGE_QUALITY } from "@/lib/images";

type LogoColor = "pepper" | "white" | "oregano" | "sesame";

type LogoProps = {
  variant?: "primary" | "secondary";
  color?: LogoColor;
  className?: string;
  onDark?: boolean;
};

/** Official logo assets — exported from EPS at 300dpi via Ghostscript */
const logoAssets = {
  primary: {
    pepper: { src: "/logos/mixalogo_p_pepper.png", width: 3809, height: 496 },
    white: { src: "/logos/mixalogo_p_white.png", width: 3809, height: 496 },
    oregano: { src: "/logos/mixalogo_p_oregano.png", width: 3809, height: 496 },
    sesame: { src: "/logos/mixalogo_p_sesame.png", width: 3809, height: 496 },
  },
  secondary: {
    pepper: { src: "/logos/mixalogo_s_pepper.png", width: 6194, height: 1535 },
    white: { src: "/logos/mixalogo_s_white.png", width: 6194, height: 1535 },
    oregano: { src: "/logos/mixalogo_s_oregano.png", width: 6194, height: 1535 },
    sesame: { src: "/logos/mixalogo_s_sesame.png", width: 6194, height: 1535 },
  },
} as const;

export function Logo({
  variant = "primary",
  color,
  className,
  onDark = false,
}: LogoProps) {
  const resolvedColor: LogoColor = color ?? (onDark ? "white" : "pepper");
  const asset = logoAssets[variant][resolvedColor];

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="MIXA home"
    >
      <Image
        src={asset.src}
        alt={variant === "secondary" ? "MIXA — World Flavours. One Table." : "MIXA"}
        width={asset.width}
        height={asset.height}
        priority={variant === "primary"}
        quality={IMAGE_QUALITY.logo}
        className={cn(
          "h-auto w-auto max-w-full",
          variant === "primary" ? "h-7 sm:h-9" : "h-14 sm:h-16"
        )}
        sizes={variant === "primary" ? "160px" : "240px"}
      />
    </Link>
  );
}
