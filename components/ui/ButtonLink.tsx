import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "bronze" | "dark" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, tone = "bronze", className = "" }: ButtonLinkProps) {
  return (
    <a className={`button-link button-link--${tone} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  );
}
