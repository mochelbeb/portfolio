import { PageViewIncrementor } from "@/components/PageViewIncrementor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Badge } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { IS_DEVELOPMENT } from "@/constants/flags";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath, lookupPublicFile } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { readFileSync, readdirSync } from "fs";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Script from "next/script";
import path from "path";
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
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const frontmatter = (
    await readMdFile(
      lookupPublicFile(getPublicPath(`content/blog/${params.slug}`), "mdx") ??
        "",
    ).catch((e) => console.error(e))
  )?.frontmatter;
  return {
    title: frontmatter ? `${frontmatter.title} | Blog` : "Post Not Found",
    description: frontmatter ? (frontmatter.summary as string) : "",
  };
}
export function generateStaticParams(): Props["params"][] {
  const filesNames = readdirSync(getPublicPath("content/blog"), "utf8");
  const slugs = filesNames.map((fileName) => ({
    slug: path.parse(fileName).name,
  }));
  return slugs;
}

export default async function Page({ params }: Props) {
  const file = lookupPublicFile(
    getPublicPath(`content/blog/${params.slug}`),
    "mdx",
  );
  if (!file)
    return (
      <p className="mb-64 mt-32 w-full text-center text-4xl">
        Post not Found...
      </p>
    );

  const fileContents = readFileSync(file, "utf8");
  const post = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
      remarkPlugins: [[codesandbox, { mode: "button" }]],
    },
  });

  const matter = blogMatterSchema.parse(post.frontmatter);
  return (
    <>
      <ScrollProgress>
        <PageViewIncrementor>
          <article className="mx-3 mt-20 flex max-w-4xl flex-col p-4 text-lg md:mx-auto md:p-10">
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
              {/* <p
              title="Page hits"
              className="flex items-center justify-center gap-1 text-xs sm:text-base"
            >
              <Eye className="mb-auto h-4 w-4 sm:h-5 sm:w-5" />
              <Suspense fallback={<Skeleton className="my-auto h-4 w-10" />}>
                <PageHits page={`/blog/${params.slug}`} />
              </Suspense>
            </p> */}
            </div>
            <ul className="flex w-full list-none flex-wrap justify-end gap-1  pt-2">
              {matter.tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="outline"
                    className="bg-muted text-sm sm:text-lg"
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
            {(!matter.draft || IS_DEVELOPMENT) && (
              <div className="prose prose-quoteless mt-4 max-w-full text-foreground dark:prose-invert md:prose-lg prose-headings:mb-2 prose-headings:mt-7 prose-h2:mt-12 prose-h2:text-3xl prose-p:my-2 prose-p:text-foreground prose-a:visited:text-purple-200 prose-blockquote:my-1 prose-blockquote:not-italic prose-ul:ml-0 prose-li:text-foreground prose-img:rounded-sm prose-hr:my-6 prose-hr:border-t-2 prose-hr:border-border  sm:prose-h2:text-4xl">
                <MDXRemote {...post} />
              </div>
            )}
            <Divider />
          </article>
        </PageViewIncrementor>
      </ScrollProgress>
      <div className="giscus mx-auto mb-4 max-w-3xl px-4" />
      <Script
        src="https://giscus.app/client.js"
        data-repo="I-3B/portfolio"
        data-repo-id="R_kgDOKeo5Cw"
        data-category="Announcements"
        data-category-id="DIC_kwDOKeo5C84Ce_Da"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      />
    </>
  );
}
