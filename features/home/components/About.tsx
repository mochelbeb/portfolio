/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
const transition = { duration: 0.4 };
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
    <section className="min-w-screen mx-10">
      {scrolled && (
        <div className="flex flex-col justify-center px-2">
          <motion.h4
            transition={transition}
            layoutId="home-header-name"
            className="w-fit font-[cursive] text-2xl md:text-4xl"
          >
            Islam Naasani
          </motion.h4>
          <motion.span
            transition={transition}
            layoutId="home-header-title"
            className="text-1xl md:text-1xl h-fit w-fit pl-2 text-gray-200"
          >
            Front-end Developer
          </motion.span>
        </div>
      )}
      <div className="mx-10">
        {scrolled && (
          <motion.img
            transition={transition}
            layoutId="home-header-icon"
            src="/pfp.jpg"
            className="float-right mx-4 aspect-square w-[30%] rounded-full"
          />
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={scrolled ? { y: 0, opacity: 1 } : { opacity: 0, y: 500 }}
          className="flex-[2] py-3 text-xl"
          transition={{ type: "tween", ...transition }}
        >
          Hello, I'm Islam, and I'm a creative problem solver with a passion for
          web development. Currently pursuing my studies in Information
          Technology Engineering at Aleppo University, I've been honing my
          skills in front-end development since early 2021, when I embarked on
          The Odin Project course. Over the past 2+ years, I've become
          proficient in using React and TypeScript to build beautiful,
          responsive, and user-friendly web applications. I'm also familiar with
          back-end development using Express.js and MongoDB, having built a
          Facebook clone project with these technologies. I'm proud to have half
          a year of professional experience as a front-end developer, where I've
          worked on admin dashboards and progressive web applications (PWA) that
          help businesses achieve their goals. My passion for creating intuitive
          and visually appealing user interfaces drives me to constantly improve
          my skills and stay up-to-date with the latest technologies. Whether
          I'm working solo or as part of a team, I always strive to deliver
          high-quality work that meets or exceeds expectations. I'm excited
          about the possibilities that lie ahead and look forward to
          collaborating with you on your next project.
        </motion.p>
      </div>
    </section>
  );
};
