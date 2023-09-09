"use client";

import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

const transition = { duration: 0.45 };
export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setScrolled(window.scrollY > 0.05 * window.innerHeight);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0.05 * window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <section className="min-h-[20vh] pt-[20vh] font-[cursive]">
      {!scrolled && (
        <motion.header className="flex flex-col items-center text-center">
          <motion.img
            transition={transition}
            src="/pfp.jpg"
            layoutId="home-header-icon"
            className="mt-10 aspect-square w-32 rounded-full"
          />
          <motion.h1
            transition={transition}
            layoutId="home-header-name"
            className="w-fit text-5xl md:text-8xl"
          >
            Islam Naasani
          </motion.h1>
          <motion.h2
            transition={transition}
            layoutId="home-header-title"
            className="w-fit pt-3 text-2xl text-yellow-50 md:pt-5 md:text-5xl"
          >
            Front-end Developer
          </motion.h2>
        </motion.header>
      )}
    </section>
  );
};
