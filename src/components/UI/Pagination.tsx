import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { cn } from "~/components/helpers/cn";
import { buttonVariants, type ButtonProps } from "~/components/UI/Button";

const Pagination = ({ className = "", ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full space-x-14 pt-20", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className = "", ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex justify-center gap-4 border-t-2 border-gray-200 pt-20 w-full mx-auto sm:w-4/5 lg:w-3/4", className)}
      {...props}
    />
  ),
);

PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className = "", ...props }, ref) => <li ref={ref} className={cn("mt-4", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({ className = "", isActive, size = "default", ...props }: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
      "text-gray-700 hover:text-black",
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className = "", ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="aller vers la page d'avant"
    size="default"
    className={cn("flex items-center gap-1 rounded-md border px-4 py-2", className)}
    {...props}
  >
    <ChevronLeft className="mr-2 h-4 w-4" />
    <span>Precédent</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className = "", ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="aller vers la page suivante"
    size="default"
    className={cn("flex items-center gap-1 rounded-md border px-4 py-2", className)}
    {...props}
  >
    <span>suivant</span>
    <ChevronRight className="ml-2 h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className = "", ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">plus de pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
