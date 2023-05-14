import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
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
    <section className="min-w-screen">
      {scrolled && (
        <div className="flex flex-col justify-center px-2">
          <motion.h4
            layoutId="home-header-name"
            className="w-fit font-[cursive] text-2xl md:text-4xl"
          >
            Islam Naasani
          </motion.h4>
          <motion.span
            layoutId="home-header-title"
            className="text-1xl md:text-1xl h-fit w-fit pl-3 text-gray-200"
          >
            Front-end Developer
          </motion.span>
        </div>
      )}
      <div className="mx-10 flex justify-between gap-[10%]">
        <motion.p
          animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 500 }}
          className="flex-[2] py-3 text-xl"
          transition={{ type: "tween" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          earum enim possimus nemo, dolores illum labore aut recusandae, minima
          eos, fuga dolor molestiae obcaecati officiis. Incidunt est voluptates
          hic earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Praesentium earum enim possimus nemo, dolores illum labore aut
          recusandae, minima eos, fuga dolor molestiae obcaecati officiis.
          Incidunt est voluptates hic earum.
        </motion.p>
        {scrolled && (
          <div className="flex-1">
            <motion.img
              layoutId="home-header-icon"
              src="/pfp.jpg"
              className="m-auto aspect-square w-full rounded-md"
            ></motion.img>
          </div>
        )}
      </div>
    </section>
  );
};
