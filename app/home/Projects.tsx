import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readMdFile } from "@/utils/md";
import { readdirSync } from "fs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { getPublicPath } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import { projectMatterSchema } from "../projects/page";

export type ProjectsProps = {};
export const Projects: FC<ProjectsProps> = async ({}) => {
  const files = readdirSync(getPublicPath("md/projects"), "utf8");
  const parsed = (
    await Promise.all(
      files.map((file) => readMdFile(getPublicPath(`md/projects/${file}`))),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter((project) => project.featured !== undefined)
    .sort((a, b) => a.rank - b.rank);
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl my-2">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {parsed.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Link
              href={`/projects/${project.slug}`}
              className="p-5 bg-card/70 flex flex-col gap-1"
            >
              <h3 className="font-bold text-2xl">{project.title}</h3>
              <div className="relative h-60 my-2">
                <Image
                  src={project.smallCover}
                  className="object-contain"
                  fill
                  alt="project logo"
                />
              </div>
              <p className="text-lg">{project.summary}</p>
              <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
                {project.skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="outline" className="bg-muted">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Link>
          </Card>
        ))}
      </div>
      <Link
        target="_blank"
        href="/projects"
        className="mx-auto py-2 px-4 rounded-lg bg-card hover:bg-accent"
      >
        View All Projects <ArrowRight className="inline-block" />
      </Link>
    </section>
  );
};
