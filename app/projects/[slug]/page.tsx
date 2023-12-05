import { PageViewIncrementor } from "@/components/PageViewIncrementor";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { getPageHits } from "@/supabase/server";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { projectMatterSchema } from "@/validation/project";
import { Eye } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

const numberFormat = new Intl.NumberFormat("en", { notation: "standard" })
  .format;
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const file = lookupPublicFile(
    getPublicPath(`projects/${params.slug}`),
    "mdx",
  );
  if (!file) {
    return { title: "Project Not Found" };
  }
  const title = (await readMdFile(file)).frontmatter.title as string;
  return {
    title,
  };
}
export default async function Page({ params }: Props) {
  const file = lookupPublicFile(
    getPublicPath(`projects/${params.slug}`),
    "mdx",
  );

  if (!file)
    return (
      <p className="mt-20 w-full text-center text-4xl">Project not Found</p>
    );

  const [project, pageHits] = await Promise.all([
    readMdFile(file),
    getPageHits(`/projects/${params.slug}`),
  ]);

  const matter = projectMatterSchema.parse(project.frontmatter);
  return (
    <PageViewIncrementor>
      <article className="mx-auto mt-4 flex max-w-3xl flex-col gap-3 px-4 text-lg sm:mt-20">
        <h1 className="text-4xl font-bold sm:text-5xl">{matter.title}</h1>
        <p>{matter.summary}</p>
        <div className="flex flex-wrap items-end justify-between gap-2">
          {Boolean(pageHits) && (
            <p
              title="Page hits"
              className="flex justify-center gap-1 text-xs sm:text-base"
            >
              <span>{numberFormat(pageHits)}</span>
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
            </p>
          )}
          <ul className="mt-auto flex list-none  flex-wrap justify-end gap-1  pt-2">
            {matter.skills.map((skill) => (
              <li key={skill}>
                <Badge
                  variant="outline"
                  className="bg-muted text-sm sm:text-lg"
                >
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
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
    </PageViewIncrementor>
  );
}
