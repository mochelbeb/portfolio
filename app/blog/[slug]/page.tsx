import { ScrollProgress } from "@/components/ScrollProgress";
import { Badge } from "@/components/ui/badge";
import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import dayjs from "dayjs";
import { existsSync, readFileSync } from "fs";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
//@ts-expect-error
import codesandbox from "remark-codesandbox";
import "../../md-code.css";
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const frontmatter = (
    await readMdFile(getPublicPath(`md/blog/${params.slug}.mdx`)).catch((e) =>
      console.error(e),
    )
  )?.frontmatter;
  return {
    title: frontmatter ? `${frontmatter.title} | Blog` : "Post Not Found",
    description: frontmatter ? (frontmatter.summary as string) : "",
  };
}
export default async function Page({ params }: Props) {
  const file = getPublicPath(`md/blog/${params.slug}.mdx`);
  if (!existsSync(file))
    return <p className="mt-20 w-full text-center text-4xl">Post not Found</p>;

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
    <ScrollProgress>
      <article className="mx-3 mb-4 mt-20 flex max-w-4xl flex-col gap-3 p-4 text-lg md:mx-auto md:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">{matter.title}</h1>
        <p>
          <time
            className="text-base"
            title={`Published at ${dayjs(matter.publishedAt).format(
              "YYYY-MM-DD",
            )}`}
            dateTime={dayjs(matter.publishedAt).format("YYYY-MM-DD")}
          >
            {dayjs(matter.publishedAt).format("MMM DD[th], YYYY")}
          </time>
          {matter.updatedAt && (
            <time
              className="text-sm text-muted-foreground"
              dateTime={dayjs(matter.updatedAt).format("YYYY-MM-DD")}
            >
              {dayjs(matter.updatedAt).format(
                " ([Last updated at] MMM DD[th], YYYY)",
              )}
            </time>
          )}
        </p>
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
          <div className="prose prose-quoteless max-w-full dark:prose-invert md:prose-lg prose-h2:text-3xl prose-p:my-2 prose-p:text-foreground prose-a:visited:text-purple-200 prose-blockquote:my-1 prose-ul:ml-0 prose-img:rounded-sm sm:prose-h2:text-4xl">
            <MDXRemote {...post} />
          </div>
        )}
      </article>
    </ScrollProgress>
  );
}
