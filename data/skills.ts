type Skill = {
  name: string;
  type: "language" | "library" | "framework" | "database" | "tool";
  level: "beginner" | "intermediate" | "proficient";
};
export const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    level: "proficient",
    type: "language",
  },
  {
    name: "React",
    level: "proficient",
    type: "library",
  },
  {
    name: "TypeScript",
    level: "proficient",
    type: "language",
  },
  {
    name: "Material UI",
    level: "proficient",
    type: "library",
  },
  {
    name: "React Query",
    level: "intermediate",
    type: "library",
  },

  {
    name: "Tailwind",
    level: "intermediate",
    type: "framework",
  },
  {
    name: "Next.js",
    level: "beginner",
    type: "framework",
  },
  {
    name: "HTML",
    level: "proficient",
    type: "language",
  },
  {
    name: "CSS",
    level: "proficient",
    type: "language",
  },
  {
    name: "SASS",
    level: "intermediate",
    type: "language",
  },
  {
    name: "Express",
    level: "beginner",
    type: "framework",
  },
  {
    name: "MongoDB",
    level: "beginner",
    type: "database",
  },
  {
    name: "Node.js",
    level: "beginner",
    type: "tool",
  },
  {
    name: "Jest",
    level: "beginner",
    type: "library",
  },
  {
    name: "Mongoose",
    level: "beginner",
    type: "library",
  },
  {
    name: "Pug",
    level: "beginner",
    type: "language",
  },
  {
    name: "npm",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Yarn",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Pnpm",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Ubuntu",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Windows",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Git",
    level: "intermediate",
    type: "tool",
  },
  {
    name: "Trello",
    level: "intermediate",
    type: "tool",
  },
];
