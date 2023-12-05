"use client";
import { incrementPageHits } from "@/supabase/browser";
import { Slot } from "@radix-ui/react-slot";
import { useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FC,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from "react";

export type PageViewIncrementorProps = {
  children: ReactNode;
};
export const PageViewIncrementor: FC<PageViewIncrementorProps> = forwardRef(
  function FC({ children }, forwardedRef: ForwardedRef<HTMLElement | null>) {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const path = usePathname();

    useEffect(() => {
      if (isInView && process.env.NODE_ENV === "production") {
        incrementPageHits(path);
      }
    }, [isInView, path]);
    return (
      <Slot
        ref={(node) => {
          ref.current = node;
          if (forwardedRef && typeof forwardedRef !== "function")
            forwardedRef.current = node;
          else forwardedRef?.(node);
        }}
      >
        {children}
      </Slot>
    );
  },
);
