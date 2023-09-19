import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { readdirSync } from "fs";
import path from "path";
import { FC } from "react";
export type ProjectsProps = {};
export const Projects: FC<ProjectsProps> = async ({}) => {
  const files = readdirSync("./data/featured-projects", "utf8");
  const parsed = await Promise.all(
    files.map((file) =>
      readMdFile(path.join("./data/featured-projects", file)),
    ),
  );
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-4xl my-2">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {parsed.map((project, index) => (
          <Card key={index} className="p-5 bg-card/70 flex flex-col">
            <div className="prose dark:prose-invert prose-img:mb-2 prose-img:mt-0 prose-img:w-full max-w-full">
              <MDXRemote {...project} />
            </div>
            <ul className="list-none flex flex-wrap justify-end gap-1 mt-auto w-full">
              {(project.frontmatter.skills as string)
                .split(",")
                .map((skill) => (
                  <li key={skill}>
                    <Badge variant="outline" className="bg-muted">
                      {skill}
                    </Badge>
                  </li>
                ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
