"use client";
import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion, useInView } from "framer-motion";
import humanizeDuration from "humanize-duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { FC, useRef } from "react";
export type ExperiencesProps = {};
export const Experiences: FC<ExperiencesProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: "some",
    once: true,
    margin: "-20%",
  });
  return (
    <section className="flex flex-col justify-center" ref={ref}>
      <h2 className="mb-10 text-4xl">Career</h2>
      {[...EXPERIENCES].reverse().map((exp, i, arr) => (
        <motion.article key={i} className="grid grid-cols-11">
          <div
            className={cn(
              "col-span-5 hidden sm:block",
              i % 2 == 0 && "sm:order-1",
              i % 2 != 0 && "sm:-order-1",
            )}
          />
          <div
            className={cn(
              "flex min-h-full w-3 flex-col items-center justify-self-center",
            )}
          >
            <TooltipProvider>
              <Tooltip delayDuration={10}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ height: 0, width: 0 }}
                    animate={
                      isInView
                        ? { height: 12, width: 12 }
                        : { height: 0, width: 0 }
                    }
                    transition={{
                      delay: Math.max(1.5 * i - 0.45, 0),
                      duration: 0.45,
                    }}
                    className="rounded-full bg-foreground"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <motion.div className="animate-bounce rounded-md bg-background/70 p-2">
                    {dayjs(exp.from).format("YYYY/MM/DD")}
                  </motion.div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <motion.div
              initial={{ flex: 0 }}
              animate={isInView ? { flex: 1 } : { flex: 0 }}
              transition={{ delay: 1.5 * i, duration: 1.5 }}
              className={cn(
                "w-1 flex-1 bg-foreground/60",
                i === arr.length - 1 && "bg-transparent pb-3",
              )}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: Math.max(1.5 * i - 0.45, 0), duration: 0.45 }}
            className={cn(
              "col-span-10 flex max-w-[90vw] flex-col gap-1 pb-20 sm:col-span-5 sm:pb-5",
              i % 2 != 0 && "sm:order-1",
              i % 2 == 0 && "sm:-order-1",
            )}
          >
            <h6 className="-mt-2 text-xl font-bold">{exp.title}</h6>
            <p className="ps-2 text-lg">
              {exp.company}
              {exp.location && " • "}
              <span className="text-secondary-foreground">{exp.location}</span>
            </p>
            <p className="ps-2 text-lg text-secondary-foreground">
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
                  {humanizeDuration(dayjs(exp.to ?? dayjs()).diff(exp.from), {
                    units: ["y", "mo"],
                    maxDecimalPoints: 0,
                    round: true,
                  })}
                </>
              )}
            </p>
            <div className="ps-2 pt-1 text-lg">{exp.description}</div>
          </motion.div>
        </motion.article>
      ))}
    </section>
  );
};
