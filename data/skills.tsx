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
      "My go-to UI library, with 2+ years of building applications with it, be it: dashboards, PWAs or websites.",
  },
  {
    name: "TypeScript",
    type: "language",
    description:
      "I write anything larger than a Todo app with it, I have a good understanding of the language including: generics, type inference and discrimination",
  },
  {
    name: "Material UI",
    type: "library",
    description:
      "Built 4 dashboards with it. comfortable with its API and styling system, and have a good amount of custom abstractions I've created along the way",
  },
  {
    name: "React Query",
    type: "library",
    description:
      "The solution I use for managing server-side state. I take extra care in organizing query keys to enable optimistic UI and invalidation stale data.",
  },
  {
    name: "Tailwind",
    type: "framework",
    description: "I starting to enjoy it recently, especially while shadcn/ui",
  },
  {
    name: "Radix UI",
    type: "library",
    description:
      "I'm using it via shadcn/ui and pairing it with tailwindcss has been great so far.",
  },
  {
    name: "Next.js",
    type: "framework",
    description:
      "Still getting comfortable with. currently I've only built with it this site.",
  },
  {
    name: "HTML",
    type: "language",
    description:
      "I've good grasp on the available elements and their semantic uses.",
  },
  {
    name: "Git",
    type: "tool",
    description:
      "Very comfortable with it, including branching, solving merge conflicts and rebasing.",
  },
  {
    name: "CSS",
    type: "language",
    description:
      "Used it in many forms: SASS, PostCSS, CSS-in-JS and Tailwind, experienced and comfortable with converting designs files to responsive web pages.",
  },
  {
    name: "SASS",
    type: "language",
    description:
      "Used it in the past, although currently the need for it is decreasing as more of it features are getting implemented in CSS",
  },
  {
    name: "Express",
    type: "framework",
    description:
      "Built some personal projects with it. I can use & write middlewares to create a CRUD app with auth.",
  },
  {
    name: "MongoDB",
    type: "database",
    description: "Used it with express as a database solution.",
  },
  {
    name: "Node.js",
    type: "tool",
    description:
      "My experience with it come from interacting with it by using Express, Next.js and writing simple npx scripts",
  },
  {
    name: "Jest",
    type: "library",
    description:
      "I've used it to write 200+ unit test for an API I wrote. I have a good understanding of TDD principles.",
  },
  {
    name: "Mongoose",
    type: "library",
    description:
      "The ODM I've used to create schemas for my MongoDB's collections.",
  },
  {
    name: "Pug",
    type: "language",
    description:
      "Used it in a couple of MVC projects I've done with Express.js",
  },
  {
    name: "npm",
    type: "tool",
    description:
      "I've created some simple npm packages and published them to npm, I have a good understanding about how npm manages dependencies and store them.",
  },
  {
    name: "Yarn",
    type: "tool",
    description:
      "An alternate solution to npm that I've used which provided a better performance.",
  },
  {
    name: "Pnpm",
    type: "tool",
    description:
      "My current node package manager, as it now provide the best performance and disk utilization",
  },
  {
    name: "Linux",
    type: "tool",
    description:
      "I use it as my daily OS. I have a hobby of automating tasks by writing bash scripts and have a little bit of experience with servers.",
  },
  {
    name: "Windows",
    type: "tool",
    description:
      "I've dual boot it with linux, although it was my primary OS prior to using Linux (before 2022)",
  },
  {
    name: "Trello",
    type: "tool",
    description:
      "I've use it to collaborate with team for dividing tasks, managing new features and bugs.",
  },
];
