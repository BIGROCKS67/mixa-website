import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredDishes } from "@/data/menus";
import { BLUR_WARM, IMAGE_QUALITY, imageSrc } from "@/lib/images";

export function FeaturedDishes() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="From the kitchen"
            title="Signature dishes"
            description="Small plates, bold flavours — each dish crafted to share and savour."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.name} delay={index * 80}>
              <article className="group card-lift">
                <div className="relative aspect-[4/5] overflow-hidden bg-mint/30">
                  <div className="image-zoom-wrap absolute inset-0">
                    <Image
                      src={imageSrc(dish.image, 640)}
                      alt={dish.name}
                      fill
                      placeholder="blur"
                      blurDataURL={BLUR_WARM}
                      quality={IMAGE_QUALITY.card}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-pepper/5 transition-colors group-hover:ring-pepper/15" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-lg text-pepper">{dish.name}</h3>
                    <p className="font-body mt-1 text-sm leading-relaxed text-pepper/65">
                      {dish.description}
                    </p>
                  </div>
                  <span className="font-heading shrink-0 text-sm text-oregano">£{dish.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={200}>
          <Link href="/menu" className="link-elegant font-heading text-sm text-oregano">
            View full menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
