"use client";
import { Slot } from "@radix-ui/react-slot";
import { motion, useScroll, useSpring } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
export type ScrollProgressProps = { children: ReactNode };
export const ScrollProgress: FC<ScrollProgressProps> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
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
        className="fixed z-10 bottom-0 right-0 left-0 h-1.5 bg-accent-foreground origin-[0%]"
        style={{ scaleX }}
      />
      <Slot ref={ref}>{children}</Slot>
    </>
  );
};
