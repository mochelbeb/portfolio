"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

export type SkillsProps = {};
export const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section className="min-h-[20vh] pt-[20vh] font-[cursive] flex flex-col gap-2">
      <motion.h2 className="text-5xl md:text-7xl">Skills</motion.h2>
      <div className="flex flex-col items-center gap-3 text-md md:text-xl">
        <ul className="flex flex-row gap-5 bg-gray-600/40 rounded-xl w-fit p-2">
          <li className="flex gap-2 items-center ">
            <div className="rounded-full w-4 h-4 bg-green-400"></div>
            <span>Beginner</span>
          </li>
          <li className="flex gap-2 items-center ">
            <div className="rounded-full w-4 h-4 bg-blue-500"></div>
            <span>Intermediate</span>
          </li>
          <li className="flex gap-2 items-center ">
            <div className="rounded-full w-4 h-4 bg-purple-700"></div>
            <span>Proficient</span>
          </li>
        </ul>
        <ul className="flex flex-wrap  gap-2 bg-gray-900/40 p-10 rounded-xl max-w-4xl">
          {skills.map((skill) => (
            <TooltipProvider key={skill.name}>
              <Tooltip delayDuration={1}>
                <li
                  className={cn(
                    "rounded-md border-2 p-3 flex-grow max-w-[150px]",
                    skill.level === "beginner" &&
                      "border-green-400 bg-green-50/10",
                    skill.level === "proficient" &&
                      "border-purple-900 bg-purple-500/10",
                    skill.level === "intermediate" &&
                      "border-blue-500 bg-blue-500/10",
                  )}
                >
                  <TooltipTrigger className="cursor-default">
                    <p className="text-md md:text-xl">{skill.name}</p>
                  </TooltipTrigger>
                </li>
                <TooltipContent>
                  {skill.type}
                  {", "}
                  {skill.level}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </section>
  );
};
