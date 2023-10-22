"use client";
import { cn } from "@/lib/utils";
import { FC, useEffect, useRef, useState } from "react";
import classes from "./MouseTracer.module.css";
export type MouseTracerProps = {};
export const MouseTracer: FC<MouseTracerProps> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isTrackingActive, setIsTrackingActive] = useState(false);
  const [startPosition, setStartPosition] = useState<
    "not-scrolled" | "scrolled" | null
  >(null);
  useEffect(() => {
    setStartPosition(window.scrollY === 0 ? "not-scrolled" : "scrolled");
  }, []);
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      if (!isTrackingActive) return;
      const x1 = ref.current.getBoundingClientRect().left;
      const y1 = ref.current.getBoundingClientRect().top;
      let x2 = 0;
      let y2 = 0;
      if (e instanceof MouseEvent) {
        x2 = e.clientX - ref.current.clientWidth / 2;
        y2 = e.clientY - ref.current.clientHeight / 2;
      } else {
        x2 = e.touches[0].clientX - ref.current.clientWidth / 2;
        y2 = e.touches[0].clientY - ref.current.clientHeight / 2;
      }
      const SPEED = 0.005;
      const duration =
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / SPEED;
      ref.current.animate(
        {
          left: `${x2}px`,
          top: `${y2}px`,
        },
        { duration, fill: "forwards" },
      );
    };
    window.addEventListener("mouseover", listener);
    window.addEventListener("mousemove", listener);
    window.addEventListener("touchstart", listener);
    return () => {
      window.removeEventListener("mouseover", listener);
      window.removeEventListener("mousemove", listener);
      window.addEventListener("touchstart", listener);
    };
  }, [isTrackingActive]);
  useEffect(() => {
    setTimeout(() => setIsTrackingActive(true), 6000);
  }, []);
  return (
    <div className="fixed inset-0 -z-10 ">
      <div
        ref={ref}
        className={cn(
          "absolute rounded-full bg-gradient-to-r from-red-600 to-purple-700",
          classes.animate,
        )}
      />
      <div className="absolute inset-0 z-10 brightness-[0.5] backdrop-blur-[125px]"></div>
    </div>
  );
};
