"use client";

import Image from "next/image";

interface WorkflowSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export function WorkflowSection({
  title,
  description,
  imageSrc,
  imageAlt = "Workflow illustration",
}: WorkflowSectionProps) {
  return (
    <section className="section pb-0 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Mobile-first layout: Image first, then text content */}
        <div className="flex flex-col">
          {/* Image: Shows first on mobile, second on desktop */}
          <div className="order-1 md:order-2 my-8 md:mb-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1920}
              height={414}
              className="w-full h-auto"
              priority={false}
            />
          </div>

          {/* Text Content: Shows second on mobile, first on desktop */}
          <div className="order-2 md:order-1 mb-8">
            <h2
              className="mx-auto max-w-[700px] text-3xl md:text-4xl font-bold leading-tight mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="mx-auto mt-3 max-w-[600px] text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
