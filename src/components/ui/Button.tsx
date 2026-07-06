import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const styles = {
    primary: "bg-oregano text-white hover:bg-oregano/90",
    secondary: "bg-honey text-pepper hover:bg-honey/90",
    outline: "border border-pepper/20 bg-transparent text-pepper hover:border-oregano hover:text-oregano",
  };

  const classes = cn(
    "btn-premium font-title inline-flex min-h-[3rem] items-center justify-center rounded-sm px-6 py-3 text-[11px] touch-manipulation",
    styles[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
