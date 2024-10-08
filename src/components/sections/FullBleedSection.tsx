import { forwardRef } from "react";

import { cn } from "../helpers";

import { Section, type SectionProps } from "./Section";

export type FullBleedSectionProps = SectionProps;

export const FullBleedSection = forwardRef<HTMLElement, FullBleedSectionProps>(({ className, ...passthru }, ref) => {
  return <Section className={cn("px-0", className)} ref={ref} {...passthru} />;
});

FullBleedSection.displayName = "FullBleedSection";
