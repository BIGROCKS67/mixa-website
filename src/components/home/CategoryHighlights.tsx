import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryHighlights } from "@/data/menus";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

export function CategoryHighlights() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading label="Discover" title="Explore MIXA" align="center" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categoryHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <Link href={item.href} className="group relative block overflow-hidden rounded-sm">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="image-zoom-wrap absolute inset-0">
                    <Image
                      src={imageSrc(item.image, 800)}
                      alt={item.title}
                      fill
                      placeholder="blur"
                      blurDataURL={BLUR_WARM}
                      quality={IMAGE_QUALITY.card}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pepper/90 via-pepper/30 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 transition-colors group-hover:ring-white/25" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-sesame/90">
                    {item.description}
                  </p>
                  <span className="link-elegant font-heading mt-4 inline-block text-sm text-honey">
                    View Menu
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
