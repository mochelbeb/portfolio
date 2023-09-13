import { readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
export async function readMdFile(filePath: string) {
  const fileContents = readFileSync(filePath, "utf8");
  // Use remark to convert markdown into HTML string
  const mdxSource = await serialize(fileContents, { parseFrontmatter: true });

  return mdxSource;
}
