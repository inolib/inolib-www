"use client";
//composant accordion de shadcn
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Image from "next/image";
import { cn } from "~/components/helpers/cn";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className = "", ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className = "", children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false); // j'ai rajoutté ce useState pour gerer l'etat ouvert ou ferme de l'accordeon pour pouvoir changer l'icone en fonction de l'etat de l'accordeon

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          isOpen ? "bg-blue-50" : "", //utilisation de l'etat de l'accordeon et modifier le style si il est ouvert on change la couleur de fond de l'accordeon
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        {children}
        <div className="ml-2">
          {isOpen ? ( //utilisation de l'etat de l'accordeon et modifier l'icone en fonction de l'etat de l'accordeon
            <Image src="/FAQs/Icon1.svg" alt="Minus icon" width={24} height={24} />
          ) : (
            <Image src="/FAQs/Icon2.svg" alt="Plus icon" width={24} height={24} />
          )}
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className = "", children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
