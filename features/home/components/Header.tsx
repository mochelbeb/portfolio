import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setScrolled(window.scrollY > 0.1 * window.innerHeight);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0.1 * window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <section className="min-h-[20vh] w-screen  pt-[20vh] font-[cursive]">
      {!scrolled && (
        <motion.header className="flex flex-col items-center gap-1 text-center">
          <motion.img
            src="/pfp.jpg"
            layoutId="home-header-icon"
            className="mt-10 aspect-square w-20 rounded-full"
          />
          <motion.h1
            layoutId="home-header-name"
            className="w-fit text-5xl md:text-8xl"
          >
            Islam Naasani
          </motion.h1>
          <motion.h2
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
