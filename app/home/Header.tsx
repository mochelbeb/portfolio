"use client";

import { motion } from "framer-motion";
import { FC } from "react";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="min-h-[100vh] pt-[30vh] font-[cursive]">
      <motion.header className="flex flex-col gap-1 items-center text-center ">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: +20, opacity: 0.3 }}
          transition={{ type: "spring" }}
          className="w-fit text-5xl md:text-8xl select-none cursor-grab active:cursor-grabbing"
          drag
          dragMomentum
          dragSnapToOrigin
        >
          Islam Naasani
        </motion.h1>
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: +20, opacity: 0.3 }}
          transition={{ type: "spring" }}
          className="w-fit pt-1 text-2xl text-yellow-50 md:pt-5 md:text-5xl select-none"
        >
          Front-end Developer
        </motion.h2>
      </motion.header>
    </section>
  );
};
