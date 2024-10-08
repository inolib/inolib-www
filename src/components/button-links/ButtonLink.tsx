import Link, { type LinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "../helpers";

export type ButtonLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ className, ...passthru }, ref) => {
  return (
    <Link
      className={cn(
        "flex w-fit gap-2 rounded-lg px-4 py-2 outline-none ring-offset-4 hover:ring-2 focus-visible:ring-2",
        className,
      )}
      ref={ref}
      {...passthru}
    />
  );
});

ButtonLink.displayName = "ButtonLink";
