import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { existsSync } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = (
    await readMdFile(getPublicPath(`md/projects/${params.slug}.mdx`)).catch(
      (e) => console.error(e),
    )
  )?.frontmatter.title;
  return {
    title: title ? `${title} | Projects` : "Project Not Found",
  };
}
export default async function Page({ params }: Props) {
  const file = getPublicPath(`md/projects/${params.slug}.mdx`);

  if (!existsSync(file))
    return (
      <p className="mt-20 w-full text-center text-4xl">Project not Found</p>
    );

  const project = await readMdFile(file);

  const matter = projectMatterSchema.parse(project.frontmatter);
  return (
    <article className="mx-auto mt-4 flex max-w-3xl flex-col gap-3 px-4 text-lg sm:mt-20">
      <h1 className="text-4xl font-bold sm:text-5xl">{matter.title}</h1>
      <p>{matter.summary}</p>
      <ul className="mt-auto flex w-full list-none  flex-wrap justify-end gap-1  pt-2">
        {matter.skills.map((skill) => (
          <li key={skill}>
            <Badge variant="outline" className="bg-muted text-sm sm:text-lg">
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
      <Image
        width={720}
        height={480}
        priority
        className="mx-auto w-full rounded-md"
        sizes="(max-width: 768px) 100vw, 70vw"
        src={matter.largeCover}
        alt="project's home page"
      />
      <div className="prose prose-lg max-w-full p-10 dark:prose-invert prose-h2:text-3xl prose-p:text-foreground prose-img:rounded-sm sm:prose-h2:text-4xl">
        <MDXRemote {...project} />
      </div>
    </article>
  );
}
