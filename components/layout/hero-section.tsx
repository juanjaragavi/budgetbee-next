import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="section pb-[50px]">
      <div className="container mx-auto px-4">
        {/* Mobile: Stacked Layout, Desktop: Single Column Centered Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Text Content - Centered */}
          <div className="text-center mb-2 lg:mb-4">
            <h1 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="w-full md:flex md:justify-center mt-6">
              <Link href={ctaLink} className="block md:inline-block">
                <Button className="px-8 py-6 text-base font-semibold rounded-full">
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image - Centered */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
