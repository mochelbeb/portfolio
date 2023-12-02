import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readMdFile } from "@/utils/md";
import { readdirSync } from "fs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { getPublicPath } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { ArrowRight } from "lucide-react";

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
      <h2 className="my-2 text-4xl">Projects</h2>
      <div className="grid grid-cols-1 justify-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {parsed.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-1 bg-card/70 p-5"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="relative my-2 h-60">
                <Image
                  src={project.smallCover}
                  className="object-contain"
                  fill
                  alt="project logo"
                  sizes="(max-width: 360px) 100vw, (max-width: 1000px) 50vw, 30vw"
                />
              </div>
              <p className="text-lg">{project.summary}</p>
              <ul className="mt-auto flex w-full list-none  flex-wrap justify-end gap-1  pt-2">
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
        href="/projects"
        className="mx-auto rounded-lg bg-card px-4 py-2 hover:bg-accent"
      >
        View All Projects <ArrowRight className="inline-block" />
      </Link>
    </section>
  );
};
