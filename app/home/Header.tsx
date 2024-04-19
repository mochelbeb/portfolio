"use client";

import { motion } from "framer-motion";
import { FC } from "react";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="min-h-[80vh] pt-[30vh] font-[cursive]">
      <motion.header className="flex flex-col items-center gap-1 text-center ">
        <motion.h1
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: [+20, 0], opacity: [0.3, 1] }}
          transition={{ type: "spring" }}
          className="w-fit cursor-grab select-none text-5xl active:cursor-grabbing md:text-8xl"
          drag
          dragMomentum
          dragSnapToOrigin
        >
          Islam Naasani
        </motion.h1>
        <motion.h2
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: [20, 0], opacity: [0.3, 1] }}
          transition={{ type: "spring" }}
          className="w-fit select-none pt-1 text-2xl text-yellow-50 md:pt-5 md:text-5xl"
        >
          A Front-end Developer.
        </motion.h2>
      </motion.header>
    </section>
  );
};
