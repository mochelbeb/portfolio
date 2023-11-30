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
import "../../md-code.css";
type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = (
    await readMdFile(getPublicPath(`md/blog/${params.slug}.md`)).catch((e) =>
      console.error(e),
    )
  )?.frontmatter.title;
  return {
    title: title ? `${title} | Blog` : "Post Not Found",
  };
}
export default async function Page({ params }: Props) {
  const file = getPublicPath(`md/blog/${params.slug}.md`);
  if (!existsSync(file))
    return <p className="text-center w-full mt-20 text-4xl">Post not Found</p>;

  const fileContents = readFileSync(file, "utf8");
  const post = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeSlug],
    },
  });

  const matter = blogMatterSchema.parse(post.frontmatter);

  return (
    <ScrollProgress>
      <article className="max-w-3xl mx-3 md:mx-auto bg-zinc-900 p-4 md:p-10 mt-8 mb-4 flex flex-col gap-3 text-lg">
        <h1 className="text-4xl sm:text-5xl font-bold">{matter.title}</h1>
        <time dateTime={matter.publishedAt.toDateString()}>
          {dayjs(matter.publishedAt).format("MMMM DD[th], YYYY")}
        </time>
        <ul className="list-none flex flex-wrap justify-end  mt-auto pt-2 gap-1  w-full">
          {matter.tags.map((tag) => (
            <li key={tag}>
              <Badge
                variant="outline"
                className="capitalize bg-muted text-sm sm:text-lg"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        {matter.draft && (
          <p className="text-yellow-300 text-3xl text-center">
            The post is currently a draft
          </p>
        )}
        {(!matter.draft || process.env.NODE_ENV === "development") && (
          <div className="max-w-full md:prose-lg prose prose-h2:text-3xl sm:prose-h2:text-4xl prose-img:rounded-sm dark:prose-invert prose-p:text-foreground prose-ul:ml-0">
            <MDXRemote {...post} />
          </div>
        )}
      </article>
    </ScrollProgress>
  );
}
