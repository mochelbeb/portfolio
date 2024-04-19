"use client";
import { Link } from "@/components/ui/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
const MotionImage = motion(Image);
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="mx-2 flex-1 py-3 sm:mx-10 sm:text-2xl [&_p]:mb-4">
      <MotionImage
        transition={{ type: "tween" }}
        src="/pfp.jpg"
        initial={{ scale: 1, x: 0, y: 0 }}
        whileFocus={{ scale: 1.5, x: -100, y: 50 }}
        whileTap={{ scale: 1.5, x: -100, y: 50 }}
        className=" float-right mx-4 my-1 aspect-square  w-[40%] max-w-xs cursor-pointer rounded-lg"
        alt="Islam's Profile Picture"
        width={500}
        priority
        height={500}
      />
      <p>
        My journey into the world of web development began at the start of 2021
        when I embarked on The Odin Project's{" "}
        <Link
          target="_blank"
          href="https://www.theodinproject.com/paths/full-stack-javascript"
        >
          full-stack (MERN) course
        </Link>
        . Throughout this comprehensive program, I dived into both front-end and
        back-end domains, laying the foundation for my career in web
        development.
      </p>
      <p>
        I'm currently in my senior year studying Computer Science at Aleppo
        University, where I've learned in depth about how computers work and how
        to build robust software.
      </p>
      <p>
        In 2022, I started{" "}
        <em className="not-italic">
          working professionally as a front-end developer, focusing my work on
          crafting usable and accessible web apps, mainly PWAs (progressive web
          application)
        </em>
        .
      </p>
      <p>
        When I'm not coding, you'll often find me exploring new technologies or
        deepening my knowledge by consuming blog posts, books, and podcasts,
        lately I'm interested in Next.js and full-stack development in general.
      </p>
      <p>
        Sometimes, I share new things that I've learned or problems that I've
        faced on{" "}
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/islam-nassani-994a32194/"
        >
          LinkedIn
        </Link>{" "}
        or on{" "}
        <Link target="_blank" href="/blog">
          my blog
        </Link>
        ,{" "}
        <em className="not-italic">
          I mainly talk about <strong>React</strong>,{" "}
          <strong>TypeScript</strong> and <strong>JavaScript</strong>
        </em>
        , if you're interested, please do connect with me on LinkedIn or
        subscribe to my newsletter here!
      </p>
    </section>
  );
};
