import Image from "next/image";

export interface GamingCtaBannerProps {
  image: {
    src: string;
    alt: string;
  };
  badge: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  disclaimer?: string;
  themeColor: string;
  themeColorDark: string;
}

export default function GamingCtaBanner({
  image,
  badge,
  headline,
  body,
  ctaLabel,
  ctaHref,
  disclaimer,
  themeColor,
  themeColorDark,
}: GamingCtaBannerProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg my-8">
      {/* Image section */}
      <div className="relative w-full h-48">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Content section */}
      <div className="px-5 pt-4 pb-6" style={{ backgroundColor: themeColorDark }}>
        <span
          className="inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: themeColor }}
        >
          {badge}
        </span>

        <h3 className="text-xl font-bold text-white mt-3 leading-snug">
          {headline}
        </h3>

        <p className="text-sm text-white/80 mt-2 leading-relaxed">{body}</p>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-xl text-center font-bold text-white text-base mt-4"
          style={{ backgroundColor: themeColor }}
        >
          {ctaLabel}
        </a>

        {disclaimer && (
          <p className="text-xs text-white/60 text-center mt-3">{disclaimer}</p>
        )}
      </div>
    </div>
  );
}
