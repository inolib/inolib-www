import { forwardRef } from "react";

import { cn } from "../helpers";

import { ButtonLink, type ButtonLinkProps } from "./ButtonLink";

export type CallToActionButtonLinkProps = ButtonLinkProps;

export const CallToActionButtonLink = forwardRef<HTMLAnchorElement, CallToActionButtonLinkProps>(
  ({ className, ...passthru }, ref) => {
    return <ButtonLink className={cn("", className)} ref={ref} {...passthru} />;
  },
);

CallToActionButtonLink.displayName = "CallToActionButtonLink";
