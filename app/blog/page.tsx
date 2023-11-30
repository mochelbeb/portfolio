import { readMdFile } from "@/utils/md";
import { getPublicPath } from "@/utils/utils";
import { blogMatterSchema } from "@/validation/blog";
import { readdirSync } from "fs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Islam Naasani",
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
    .sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));
  return (
    <>
      <div className="text-2xl sm:text-3xl mx-12 flex flex-col items-center mt-32 my-20">
        <h2 className="text-5xl sm:text-7xl mb-20">Blog</h2>
        <ol className="list-disc">
          {parsed.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="underline">
                {post.title}
                {post.draft && " (draft)"}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
