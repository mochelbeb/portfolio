import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { readdirSync } from "fs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Islam Naasani",
};
export default async function Page() {
  const publicPath = getPublicPath("content/projects");
  const files = readdirSync(publicPath, "utf8");
  console.log(files);

  const projects = (
    await Promise.all(
      files.map((file) =>
        readMdFile(
          lookupPublicFile(`${publicPath}/${file.split(".")[0]}`, "mdx") ?? "",
        ),
      ),
    )
  )
    .map((md, i) => ({
      ...projectMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .sort((a, b) => a.rank - b.rank);
  return (
    <>
      <h1 className="pt-32 text-center text-5xl">Projects</h1>
      <p className="p-1 text-center text-lg">
        Projects I&apos;ve worked on, either for work, university or personal.
      </p>
      <div className="mx-auto flex max-w-xl flex-col gap-3 p-3 sm:p-8">
        {projects.map((project, i) => (
          <Card key={project.slug} className="bg-card/70">
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-1 p-5"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="relative my-2 h-60">
                <Image
                  src={project.smallCover}
                  className="object-contain"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 360px) 100vw, 50vw"
                  alt="project logo"
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
    </>
  );
}
