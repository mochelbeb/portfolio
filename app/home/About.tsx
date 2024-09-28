"use client";
import { Link } from "@/components/ui/link";
import { FC } from "react";
export type AboutProps = {};
export const About: FC<AboutProps> = ({}) => {
  return (
    <section className="max-w-lg flex-1 px-2 py-3 sm:px-10 sm:text-lg [&_p]:mb-4">
      <p>
        I'm a front-end developer with 2+ years of experience, a linux
        enthusiast, and a TypeScript lover.
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
      </p>
    </section>
  );
};
