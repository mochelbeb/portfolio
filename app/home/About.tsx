"use client";
import { Link } from "@/components/ui/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
const MotionImage = motion(Image);
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="mx-10">
      <p className="flex-1 py-3 text-2xl">
        <MotionImage
          transition={{ type: "tween" }}
          src="/pfp.jpg"
          initial={{ scale: 1, x: 0, y: 0 }}
          whileFocus={{ scale: 1.5, x: -100, y: 50 }}
          whileTap={{ scale: 1.5, x: -100, y: 50 }}
          className="float-right mx-4 mt-2 aspect-square  w-[30%] max-w-xs cursor-pointer rounded-lg"
          alt="Islam's Profile Picture"
          width={350}
          height={350}
        />
        My journey into the world of web development began at the start of 2021
        when I embarked on The Odin {`Project's `}
        <Link
          target="_blank"
          href="https://www.theodinproject.com/paths/full-stack-javascript"
        >
          full-stack course
        </Link>
        . Throughout this comprehensive program, I delved into both front-end
        and back-end technologies, laying the foundation for my career in web
        development.
        <br />
        <br />
        {`I'm currently in my senior year studying Computer
           Science at Aleppo University.`}
        <br />
        {`In 2022, I started working professionally as a front-end developer.
           I focus my work on crafting usable and accessible web apps with
           an extensive focus on building dashboards.`}
        <br />
        <br />
        {`When I'm not coding, you'll often find me exploring new technologies
           or deepening my knowledge by consuming blog posts, books, and podcasts,
           I also recently started sharing some technical tips on`}{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/islam-nassani-994a32194/"
        >
          LinkedIn.
        </Link>
        <br />
        <br />
        {`I'm excited to connect with fellow developers and tech
           enthusiasts to collaborate and share ideas.`}
        <br />
        {`I keep up with
            the current trends in the web ecosystem by subscribing
            to tech newsletters.`}
      </p>
    </section>
  );
};
