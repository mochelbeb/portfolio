import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { readdirSync } from "fs";
import { Metadata } from "next";
import Link from "next/link";
dayjs.extend(advancedFormat);
export const metadata: Metadata = {
  title: "Blog | Islam Naasani",
  description:
    "My personal Blog, I write about problems I've faced or new things I've learned.",
};
export default async function Page() {
  const files = readdirSync(getPublicPath("md/blog"), "utf8");
  const parsed = (
    await Promise.all(
      files.map((file) => readMdFile(getPublicPath(`md/blog/${file}`))),
    )
  )
    .map((md, i) => ({
      ...blogMatterSchema.parse(md.frontmatter),
      slug: files[i].split(".")[0],
    }))
    .filter(
      (post) => post.draft !== true || process.env.NODE_ENV === "development",
    )
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return (
    <>
      <div className="mx-auto my-20 mt-32 flex max-w-2xl flex-col items-center gap-3 px-8">
        <h1 className="text-5xl sm:text-7xl">Blog</h1>
        <p className="text-center text-lg">
          {`My personal Blog, I write about problems I've faced or new things
          I've learned.`}
        </p>
        <ol className="mt-10 flex flex-col gap-5">
          {parsed.map((post, i) => (
            <li key={post.slug}>
              {i !== 0 && (
                <hr className="mb-5 h-0.5 rounded-sm bg-purple-200" />
              )}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl text-violet-400">
                  {post.title}
                  {post.draft && " (draft)"}
                </h2>
                <time
                  className="text-sm text-gray-300"
                  dateTime={dayjs(post.publishedAt).format("YYYY-MM-DD")}
                >
                  {dayjs(post.publishedAt).format("MMM Do, YYYY")}
                </time>
                <p className="mt-2">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
