import { PageViewIncrementor } from "@/components/PageViewIncrementor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { getPageHits } from "@/supabase/server";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { readFileSync } from "fs";
import { Eye } from "lucide-react";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
//@ts-expect-error
import codesandbox from "remark-codesandbox";
import "../../md-code.css";

dayjs.extend(advancedFormat);
type Props = {
  params: { slug: string };
};
const numberFormat = new Intl.NumberFormat("en", { notation: "standard" })
  .format;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const frontmatter = (
    await readMdFile(getPublicPath(`content/blog/${params.slug}.mdx`)).catch((e) =>
      console.error(e),
    )
  )?.frontmatter;
  return {
    title: frontmatter ? `${frontmatter.title} | Blog` : "Post Not Found",
    description: frontmatter ? (frontmatter.summary as string) : "",
  };
}
export default async function Page({ params }: Props) {
  const file = lookupPublicFile(getPublicPath(`content/blog/${params.slug}`), "mdx");
  if (!file)
    return <p className="mt-20 w-full text-center text-4xl">Post not Found</p>;

  const fileContents = readFileSync(file, "utf8");
  const [post, pageHits] = await Promise.all([
    serialize(fileContents, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
        remarkPlugins: [[codesandbox, { mode: "button" }]],
      },
    }),
    getPageHits(`/blog/${params.slug}`),
  ]);

  const matter = blogMatterSchema.parse(post.frontmatter);
  return (
    <ScrollProgress>
      <PageViewIncrementor>
        <article className="mx-3 mb-4 mt-20 flex max-w-4xl flex-col p-4 text-lg md:mx-auto md:p-10">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            {matter.title}
          </h1>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex justify-center gap-0.5">
              <time
                className="text-xs sm:text-base"
                title={`Published at ${dayjs(matter.publishedAt).format(
                  "YYYY-MM-DD",
                )}`}
                dateTime={dayjs(matter.publishedAt).format("YYYY-MM-DD")}
              >
                {dayjs(matter.publishedAt).format("MMM Do, YYYY")}
              </time>
              {matter.updatedAt && (
                <time
                  className="text-xs text-muted-foreground sm:text-sm"
                  dateTime={dayjs(matter.updatedAt).format("YYYY-MM-DD")}
                >
                  {dayjs(matter.updatedAt).format(
                    " ([Updated at] MMM Do, YYYY)",
                  )}
                </time>
              )}
            </div>
            {Boolean(pageHits) && (
              <p
                title="Page hits"
                className="flex justify-center gap-1 text-xs sm:text-base"
              >
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{numberFormat(pageHits)}</span>
              </p>
            )}
          </div>
          <ul className="flex w-full list-none flex-wrap justify-end gap-1  pt-2">
            {matter.tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="bg-muted text-sm capitalize sm:text-lg"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
          {matter.draft && (
            <p className="text-center text-3xl text-yellow-300">
              The post is currently a draft
            </p>
          )}
          {(!matter.draft || process.env.NODE_ENV === "development") && (
            <div className="prose prose-quoteless mt-4 max-w-full dark:prose-invert md:prose-lg prose-h2:text-3xl prose-p:my-2 prose-p:text-foreground prose-a:visited:text-purple-200 prose-blockquote:my-1 prose-ul:ml-0 prose-img:rounded-sm sm:prose-h2:text-4xl">
              <MDXRemote {...post} />
            </div>
          )}
        </article>
      </PageViewIncrementor>
    </ScrollProgress>
  );
}
