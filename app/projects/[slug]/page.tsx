import { MDXRemote } from "@/lib/MDXRemote";
import { readMdFile } from "@/utils/md";
import path from "path";

export default async function Page({ params }: { params: { slug: string } }) {
  const parsed = await readMdFile(
    path.join("./data/projects", `${params.slug}.md`),
  );
  return (
    <article className="prose dark:prose-invert">
      <MDXRemote {...parsed} />
    </article>
  );
}
