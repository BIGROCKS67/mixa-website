import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "onDark";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  variant = "default",
  className,
}: SectionHeadingProps) {
  const onDark = variant === "onDark";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {label && (
        <p className={cn("font-title mb-3 text-[11px]", onDark ? "text-honey" : "text-oregano")}>
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl tracking-tight sm:text-4xl",
          onDark ? "text-white" : "text-pepper"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "font-body mt-4 max-w-2xl text-base leading-relaxed",
            onDark ? "text-sesame/85" : "text-pepper/70",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
