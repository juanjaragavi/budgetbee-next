import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headers - Black text to match original
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-4xl md:text-5xl font-bold mt-8 mb-6 text-gray-900",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mt-8 mb-4 text-gray-900",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-2xl md:text-3xl font-semibold mt-6 mb-4 text-gray-900",
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "text-xl md:text-2xl font-semibold mt-6 mb-3 text-gray-900",
          className,
        )}
        {...props}
      />
    ),

    // Paragraph - Black text for readability
    p: ({ className, ...props }) => (
      <p
        className={cn("mb-4 text-gray-900 leading-relaxed", className)}
        {...props}
      />
    ),

    // Lists - Black text
    ul: ({ className, ...props }) => (
      <ul
        className={cn("mb-6 list-disc pl-8 text-gray-900 space-y-2", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "mb-6 list-decimal pl-8 text-gray-900 space-y-2",
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("mb-2", className)} {...props} />
    ),

    // Blockquote - Brand yellow background for "The Bottom Line" style quotes
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "border-l-4 border-[#F7B500] bg-[#FFF9E6] pl-6 pr-4 py-4 mb-6 italic text-gray-900 rounded-r-lg my-6",
          className,
        )}
        {...props}
      />
    ),

    // Image
    img: (props) => {
      // If there's a src property with an absolute URL, use standard img tag
      if (
        props.src &&
        (props.src.startsWith("http://") || props.src.startsWith("https://"))
      ) {
        return (
          <span className="block my-6">
            <img
              className="rounded-xl mx-auto"
              alt={props.alt || ""}
              {...props}
            />
            {props.alt && (
              <span className="block text-left text-sm text-gray-500 mt-2">
                {props.alt}
              </span>
            )}
          </span>
        );
      }

      // For local images, use Next.js Image component
      return (
        <span className="block my-6">
          <Image
            src={
              props.src ||
              "https://media.topfinanzas.com/images/budgetbee/favicon.webp"
            }
            alt={props.alt || ""}
            width={props.width ? Number(props.width) : 800}
            height={props.height ? Number(props.height) : 450}
            className="rounded-xl mx-auto"
          />
          {props.alt && (
            <span className="block text-left text-sm text-gray-500 mt-2">
              {props.alt}
            </span>
          )}
        </span>
      );
    },

    // Links
    a: ({ className, href, ...props }) => {
      // Ensure href is a valid string and not undefined
      const linkHref = href || "#";

      return (
        <Link
          href={linkHref}
          className={cn(
            "text-primary-dark hover:text-primary hover:underline font-medium transition-colors",
            className,
          )}
          {...props}
        />
      );
    },

    // Code blocks
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "p-4 bg-gray-900 rounded-xl mb-6 overflow-x-auto text-white",
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "bg-gray-100 rounded px-1 py-0.5 text-gray-800 font-mono text-sm",
          className,
        )}
        {...props}
      />
    ),

    // Table
    table: ({ className, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table
          className={cn("min-w-full divide-y divide-gray-200", className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-gray-50", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn("divide-y divide-gray-200", className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("px-4 py-3 text-sm text-gray-700", className)}
        {...props}
      />
    ),

    // Horizontal rule
    hr: ({ className, ...props }) => (
      <hr
        className={cn("my-8 border-t border-gray-200", className)}
        {...props}
      />
    ),

    // Custom components
    Button,

    // Merge with any other components passed in
    ...components,
  };
}
