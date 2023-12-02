"use client";
import { SKILLS } from "@/data/skills";
import { motion } from "framer-motion";
import { FC, useState } from "react";

export type SkillsProps = {};
export const Skills: FC<SkillsProps> = ({}) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  return (
    <section className="flex flex-col gap-3 font-[cursive]">
      <motion.h2 className="text-4xl">Skills</motion.h2>
      <div className="mx-auto flex max-w-5xl flex-col justify-stretch gap-2 rounded-lg bg-gray-900/40 p-4 md:flex-row">
        <motion.div
          key={selectedSkill.name}
          className="min-h-[200px] flex-1 rounded-xl border-2 border-foreground p-2"
          layoutId={`skill-${selectedSkill.name}`}
        >
          <h6 className="text-2xl">
            <motion.span
              key={selectedSkill.name}
              className="inline-block"
              layoutId={`skill-${selectedSkill.name}-name`}
            >
              {selectedSkill.name}
            </motion.span>
          </h6>

          <p className="p-1">{selectedSkill.description}</p>
        </motion.div>
        <div className="text-md flex flex-[4] flex-col items-center gap-3 md:text-xl">
          <ul className="flex flex-wrap gap-2 rounded-xl">
            {SKILLS.filter((skill) => skill !== selectedSkill).map((skill) => (
              <motion.li
                key={skill.name}
                layoutId={`skill-${skill.name}`}
                className="flex-grow rounded-lg border-2 border-primary  md:flex-grow-0"
              >
                <button
                  onClick={() => setSelectedSkill(skill)}
                  className="min-w-[60px] rounded-lg p-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-800 focus-visible:ring-offset-2"
                >
                  <motion.p
                    className="text-md md:text-xl"
                    layoutId={`skill-${skill.name}-name`}
                  >
                    {skill.name}
                  </motion.p>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
