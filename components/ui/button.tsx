import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "default" | "icon" | "sm" | "lg";

/**
 * Generates button class names — exported for use in alert-dialog and
 * other components that need button-like styling without the Button element.
 */
export function buttonVariants(opts?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const v = opts?.variant ?? "primary";
  return cn(
    "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
    {
      "px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base": opts?.size !== "icon" && opts?.size !== "sm",
      "h-10 w-10 p-0": opts?.size === "icon",
      "px-3 py-1 text-sm": opts?.size === "sm",
      "bg-primary hover:bg-primary-dark text-white hover:text-white": v === "primary",
      "bg-gray-900 hover:bg-gray-800 text-white border border-gray-900": v === "secondary",
      "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900": v === "outline",
    },
    opts?.className,
  );
}

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  /** Controls padding and dimensions; "icon" renders a square icon button */
  size?: ButtonSize;
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
      size,
      showArrow = false,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyles = cn(
      "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-full whitespace-nowrap flex-nowrap",
      {
        "px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base w-full md:w-auto": size !== "icon" && size !== "sm",
        "h-10 w-10 p-0": size === "icon",
        "px-3 py-1 text-sm": size === "sm",
        "bg-primary hover:bg-primary-dark text-white hover:text-white":
          variant === "primary",
        "bg-gray-900 hover:bg-gray-800 text-white border border-gray-900":
          variant === "secondary",
        "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900":
          variant === "outline",
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
