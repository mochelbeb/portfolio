import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import NextLink, { LinkProps as NextProps } from "next/link";

const linkVariants = cva("", {
  variants: {
    variant: {
      none: "",
      underline: "underline-offset-4 underline",
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});

export type LinkProps = NextProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    className?: string;
    asChild?: boolean;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : NextLink;
    return (
      <Comp
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

export { Link, linkVariants };
