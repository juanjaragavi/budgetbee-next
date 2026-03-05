import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  /**
   * Accessibility label for screen readers
   * Required for buttons without text content
   */
  "aria-label"?: string;
}

export interface ButtonAsButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

export interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      showArrow = false,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyles = cn(
      "inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-medium transition-colors duration-200 rounded-full whitespace-nowrap w-full md:w-auto flex-nowrap",
      {
        "bg-primary hover:bg-primary-dark text-white hover:text-white":
          variant === "primary",
        "bg-gray-900 hover:bg-gray-800 text-white border border-gray-900":
          variant === "secondary",
        "!w-full": fullWidth,
      },
      className,
    );

    const content = (
      <span className="inline-flex items-center justify-center gap-2">
        {children}
        {showArrow && <ArrowRight aria-hidden className="h-5 w-5" />}
      </span>
    );

    if ("href" in props && props.href !== undefined) {
      return (
        <Link href={props.href} className={buttonStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonStyles}
        ref={ref}
        {...(props as ButtonAsButtonProps)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
