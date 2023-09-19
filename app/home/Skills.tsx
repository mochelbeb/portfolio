"use client";
import { SKILLS } from "@/data/skills";
import { motion } from "framer-motion";
import { FC, useState } from "react";

export type SkillsProps = {};
export const Skills: FC<SkillsProps> = ({}) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  return (
    <section className="min-h-[20vh] pt-[20vh] font-[cursive] flex flex-col gap-3">
      <motion.h2 className="text-4xl">Skills</motion.h2>
      <div className="flex gap-2 bg-gray-900/40 p-4 rounded-lg max-w-5xl mx-auto">
        <motion.div
          key={selectedSkill.name}
          className="flex-1 border-2 border-foreground p-2 rounded-xl min-h-[200px]"
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
        <div className="flex flex-[4] flex-col items-center gap-3 text-md md:text-xl">
          <ul className="flex flex-wrap gap-2 rounded-xl">
            {SKILLS.filter((skill) => skill !== selectedSkill).map((skill) => (
              <motion.li
                role="button"
                onClick={() => setSelectedSkill(skill)}
                key={skill.name}
                layoutId={`skill-${skill.name}`}
                className="border-2 border-foreground p-2 rounded-lg"
              >
                <motion.p
                  className="text-md md:text-xl"
                  layoutId={`skill-${skill.name}-name`}
                >
                  {skill.name}
                </motion.p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
