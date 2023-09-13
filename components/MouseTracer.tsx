"use client";
import { FC, useEffect, useRef } from "react";
export type MouseTracerProps = {};
export const MouseTracer: FC<MouseTracerProps> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
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
      const SPEED = 0.01;
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
  }, []);
  return (
    <div className="fixed inset-0 -z-10 ">
      <div
        ref={ref}
        className="absolute -top-[10%] left-0 aspect-square h-64 animate-spin-slow  rounded-full bg-gradient-to-r from-purple-500  to-green-300 "
      />
      <div className="absolute inset-0 z-10 brightness-50 backdrop-blur-[100px]"></div>
    </div>
  );
};
