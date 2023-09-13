import { EXPERIENCES } from "@/data/experiences";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(relativeTime);

import { FC } from "react";
export type ExperienceProps = {};
export const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl my-2">Career</h2>
      {EXPERIENCES.reverse().map((exp, i) => (
        <article key={i} className="flex flex-col gap-1 px-3 ">
          <h6 className="text-xl font-bold">{exp.title}</h6>
          <p className="[&>a]:border-b-foreground/60 [&>a]:border-b-2">
            {exp.company}
            {" • "}
            <span className="text-secondary-foreground">{exp.location}</span>
          </p>
          <p className="text-secondary-foreground">
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
                {dayjs
                  .duration(dayjs(exp.to ?? dayjs()).diff(exp.from))
                  .humanize()}
              </>
            )}
          </p>
        </article>
      ))}
    </section>
  );
};
