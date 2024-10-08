import { forwardRef } from "react";

import { cn } from "../helpers";

import { ButtonLink, type ButtonLinkProps } from "./ButtonLink";

export type GhostButtonLinkProps = ButtonLinkProps;

export const GhostButtonLink = forwardRef<HTMLAnchorElement, GhostButtonLinkProps>(
  ({ className, ...passthru }, ref) => {
    return <ButtonLink className={cn("", className)} ref={ref} {...passthru} />;
  },
);

GhostButtonLink.displayName = "GhostButtonLink";
