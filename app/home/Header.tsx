"use client";

import { motion } from "framer-motion";
import { FC } from "react";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="pt-[10vh] font-[cursive]">
      <motion.header className="flex flex-col gap-1 ">
        <motion.h1
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: [+20, 0], opacity: [0.3, 1] }}
          transition={{ type: "spring" }}
          className="w-fit cursor-grab select-none text-3xl active:cursor-grabbing md:text-5xl"
          drag
          dragMomentum
          dragSnapToOrigin
        >
          Islam Naasani
        </motion.h1>
      </motion.header>
    </section>
  );
};
