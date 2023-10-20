import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { projectMatterSchema } from "../page";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = (
    await readMdFile(getPublicPath(`md/projects/${params.slug}.md`)).catch(
      (e) => console.error(e),
    )
  )?.frontmatter.title;
  return {
    title: title ? `${title} | Projects` : "Project Not Found",
  };
}
export default async function Page({ params }: Props) {
  const project = await readMdFile(
    getPublicPath(`md/projects/${params.slug}.md`),
  ).catch((e) => console.error(e));

  if (!project)
    return (
      <p className="text-center w-full mt-20 text-4xl">Project not Found</p>
    );

  const matter = projectMatterSchema.parse(project.frontmatter);
  return (
    <article className="max-w-3xl mx-auto mt-20 flex flex-col gap-3 text-lg">
      <h1 className="text-5xl font-bold">{matter.title}</h1>
      <p>{matter.summary}</p>
      <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
        {matter.skills.map((skill) => (
          <li key={skill}>
            <Badge variant="outline" className="bg-muted text-lg">
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
      <Image
        width={1000}
        height={1000}
        priority
        className="max-h-[40vh] object-contain object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={matter.largeCover}
        alt="project's home page"
      />
      <div className="max-w-full prose dark:prose-invert prose-p:text-foreground p-2">
        <MDXRemote {...project} />
      </div>
    </article>
  );
}
