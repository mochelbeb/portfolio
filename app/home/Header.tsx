"use client";

import { motion } from "framer-motion";
import { FC } from "react";

const transition = { duration: 0.45 };
export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="min-h-[80vh] pt-[30vh] font-[cursive]">
      <motion.header className="flex flex-col gap-1 items-center text-center">
        <motion.h1
          transition={transition}
          className="w-fit text-5xl md:text-8xl"
        >
          Islam Naasani
        </motion.h1>
        <motion.h2
          transition={transition}
          className="w-fit pt-1 text-2xl text-yellow-50 md:pt-5 md:text-5xl"
        >
          Front-end Developer
        </motion.h2>
      </motion.header>
    </section>
  );
};
