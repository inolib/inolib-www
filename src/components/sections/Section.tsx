import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "../helpers";

export type SectionProps = HTMLAttributes<HTMLDivElement>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(({ className, ...passthru }, ref) => {
  return <div className={cn("px-32", className)} ref={ref} {...passthru} />;
});

Section.displayName = "Section";
