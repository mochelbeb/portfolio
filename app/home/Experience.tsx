import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import humanize from "humanize-duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { FC } from "react";
export type ExperienceProps = {};
export const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl mb-3">Career</h2>
      {[...EXPERIENCES].reverse().map((exp, i, arr) => (
        <article key={i} className="flex flex-row">
          <div className="min-h-full flex flex-col items-center">
            <div
              className={cn(
                "w-1 h-2 bg-foreground/60",
                i === 0 && "pt-2 bg-transparent",
              )}
            />
            <div className="w-3 h-3 bg-foreground rounded-full" />
            <div
              className={cn(
                "flex-1 w-1 bg-foreground/60",
                i === arr.length - 1 && "bg-transparent pb-3",
              )}
            />
          </div>
          <div className="flex flex-col gap-1 px-3 pb-3">
            <h6 className="text-xl font-bold">{exp.title}</h6>
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
        </article>
      ))}
    </section>
  );
};
