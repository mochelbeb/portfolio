import { ReactNode } from "react";

type Skill = {
  name: string;
  type: "language" | "library" | "framework" | "database" | "tool";
  description: ReactNode;
};
export const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    type: "language",
    description:
      "I have 3+ years of experience with it, I used it for building Front-end, Back-end and even for scripting",
  },
  {
    name: "React",
    type: "library",
    description:
      "My go to UI library, with 2+ years of building applications with it, be it dashboards, PWAs or websites.",
  },
  {
    name: "TypeScript",
    type: "language",
    description: <></>,
  },
  {
    name: "Material UI",
    type: "library",
    description: <></>,
  },
  {
    name: "React Query",
    type: "library",
    description: <></>,
  },

  {
    name: "Tailwind",
    type: "framework",
    description: <></>,
  },
  {
    name: "Next.js",
    type: "framework",
    description: <></>,
  },
  {
    name: "HTML",
    type: "language",
    description: <></>,
  },
  {
    name: "CSS",
    type: "language",
    description: <></>,
  },
  {
    name: "SASS",
    type: "language",
    description: <></>,
  },
  {
    name: "Express",
    type: "framework",
    description: <></>,
  },
  {
    name: "MongoDB",
    type: "database",
    description: <></>,
  },
  {
    name: "Node.js",
    type: "tool",
    description: <></>,
  },
  {
    name: "Jest",
    type: "library",
    description: <></>,
  },
  {
    name: "Mongoose",
    type: "library",
    description: <></>,
  },
  {
    name: "Pug",
    type: "language",
    description: <></>,
  },
  {
    name: "npm",
    type: "tool",
    description: <></>,
  },
  {
    name: "Yarn",
    type: "tool",
    description: <></>,
  },
  {
    name: "Pnpm",
    type: "tool",
    description: <></>,
  },
  {
    name: "Ubuntu",
    type: "tool",
    description: <></>,
  },
  {
    name: "Windows",
    type: "tool",
    description: <></>,
  },
  {
    name: "Git",
    type: "tool",
    description: <></>,
  },
  {
    name: "Trello",
    type: "tool",
    description: <></>,
  },
];
