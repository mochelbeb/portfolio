"use client";
import { motion } from "framer-motion";
import { FC } from "react";
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section>
      <div className="flex flex-col justify-center px-2">
        <h4 className="w-fit text-5xl md:text-4xl">Islam Naasani</h4>
        <span className="text-2xl md:text-1xl h-fit w-fit ps-3 text-gray-200">
          Front-end Developer
        </span>
      </div>
      <div className="mx-10">
        <p className="flex-1 py-3 text-2xl [&_a]:border-b-2 [&_a]:border-b-foreground">
          <motion.img
            transition={{ type: "tween" }}
            src="/pfp.jpg"
            initial={{ scale: 1, x: 0, y: 0 }}
            whileHover={{ scale: 1.5, x: -100, y: 50 }}
            whileTap={{ scale: 1.5, x: -100, y: 50 }}
            className="float-right mt-2 mx-4 aspect-square  max-w-xs w-[30%] rounded-3xl cursor-pointer"
          />
          My journey into the world of web development began at the start of
          2021 when I embarked on The Odin {`Project's `}
          <a href="https://www.theodinproject.com/paths/full-stack-javascript">
            full-stack course
          </a>
          . Throughout this comprehensive program, I delved into both front-end
          and back-end technologies, laying the foundation for my career in web
          development.
          <br />
          <br />
          {`I'm currently in my senior year studying Computer
           Science engineering at Aleppo University.`}
          <br />
          {`In 2022, I started working professionally as a front-end developer.
           I focus my work on crafting usable and accessible web apps with
           an extensive focus on building dashboards.`}
          <br />
          <br />
          {`When I'm not coding, you'll often find me exploring new technologies
           or deepening my knowledge by consuming blog posts, books, and podcasts,
           I also recently started sharing some technical tips on`}{" "}
          <a href="https://www.linkedin.com/in/islam-nassani-994a32194/">
            LinkedIn.
          </a>
          <br />
          <br />
          {`I'm excited to connect with fellow developers and tech
           enthusiasts to collaborate and share ideas.`}
          <br />
          {`I keep up with
            the current trends in the web ecosystem by subscribing
            to tech newsletters.`}
        </p>
      </div>
    </section>
  );
};
