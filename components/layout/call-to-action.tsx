"use client";

import Image from "next/image";
import Link from "next/link";

interface CallToActionProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText: string;
  buttonLink: string;
}

export function CallToAction({
  title,
  content,
  imageSrc,
  imageAlt = "Call to action image",
  buttonText,
  buttonLink,
}: CallToActionProps) {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg"
              priority={false}
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{content}</p>
            <Link
              href={buttonLink}
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white hover:text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
