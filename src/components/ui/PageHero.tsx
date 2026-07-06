import Image from "next/image";
import { BLUR_DARK, IMAGE_QUALITY, imageSrc } from "@/lib/images";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  image: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  tall?: boolean;
};

export function PageHero({ image, alt, children, className, tall = false }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-pepper",
        tall ? "min-h-[50vh]" : "min-h-[38vh]",
        className
      )}
    >
      <Image
        src={imageSrc(image, 1600)}
        alt={alt}
        fill
        priority
        placeholder="blur"
        blurDataURL={BLUR_DARK}
        quality={IMAGE_QUALITY.hero}
        className="object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pepper via-pepper/55 to-pepper/25" />
      {children && (
        <div className="relative mx-auto flex max-w-7xl items-end px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16">
          {children}
        </div>
      )}
    </section>
  );
}
