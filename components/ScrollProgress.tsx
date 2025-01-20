"use client";
import { Slot } from "@radix-ui/react-slot";
import { motion, useScroll, useSpring } from "framer-motion";
import { FC, ForwardedRef, ReactNode, forwardRef, useRef } from "react";
export type ScrollProgressProps = { children: ReactNode };
export const ScrollProgress: FC<ScrollProgressProps> = forwardRef(function FC(
  { children },
  forwardedRef: ForwardedRef<HTMLElement>,
) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-10 h-1 origin-[0%] bg-accent-foreground"
        style={{ scaleX }}
      />
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
    </>
  );
});
