"use client";
import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion, useInView } from "framer-motion";
import humanize from "humanize-duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { FC, useRef } from "react";
export type ExperienceProps = {};
export const Experience: FC<ExperienceProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
    margin: "80%",
  });
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl mb-3">Career</h2>
      {[...EXPERIENCES].reverse().map((exp, i, arr) => (
        <motion.article key={i} ref={ref} className="flex flex-row">
          <div className="min-h-full flex flex-col items-center w-3 min-w-fit">
            <motion.div
              initial={{ height: 0, width: 0 }}
              animate={
                isInView ? { height: 12, width: 12 } : { height: 0, width: 0 }
              }
              transition={{ delay: 1.4 * i - 0.4, duration: 0.4 }}
              className="bg-foreground rounded-full"
            />
            <motion.div
              initial={{ flex: 0 }}
              animate={isInView ? { flex: 1 } : { flex: 0 }}
              transition={{ delay: 1.4 * i, duration: 1.4 }}
              className={cn(
                "flex-1 w-1 bg-foreground/60",
                i === arr.length - 1 && "bg-transparent pb-3",
              )}
            />
          </div>
          <div className="flex flex-col gap-1 px-3 pb-20 max-w-[90vw]">
            <h6 className="text-xl font-bold -mt-2">{exp.title}</h6>
            <p className="[&>a]:border-b-foreground/60 [&>a]:border-b-2 ps-2 text-lg">
              {exp.company}
              {exp.location && " • "}
              <span className="text-secondary-foreground">{exp.location}</span>
            </p>
            <p className="text-secondary-foreground ps-2 text-lg">
              <time dateTime={dayjs(exp.from).toISOString()}>
                {dayjs(exp.from).format("MMM YYYY")}
              </time>
              {" – "}
              {exp.to !== null ? (
                <time dateTime={dayjs(exp.to).toISOString()}>
                  {dayjs(exp.to).format("MMM YYYY")}
                </time>
              ) : (
                "Present"
              )}
              {!exp.noDuration && (
                <>
                  {" • "}
                  {humanize(dayjs(exp.to ?? dayjs()).diff(exp.from), {
                    units: ["y", "mo"],
                    maxDecimalPoints: 0,
                  })}
                </>
              )}
            </p>
            <div className="max-w-xl ps-2 pt-1">{exp.description}</div>
          </div>
        </motion.article>
      ))}
    </section>
  );
};
