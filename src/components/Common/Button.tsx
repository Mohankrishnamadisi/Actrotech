"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  target?: string;
  rel?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

function getVariantClasses(variant: Variant = "primary") {
  switch (variant) {
    case "secondary":
      return "btn-secondary";
    case "ghost":
      return "btn-ghost";
    default:
      return "btn-primary";
  }
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  href,
  target,
  rel,
  ...rest
}: ButtonProps & AnchorProps) => {
  const classes = `btn ${getVariantClasses(variant)} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
