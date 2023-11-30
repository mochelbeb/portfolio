import { readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
export async function readMdFile(filePath: string) {
  const fileContents = readFileSync(filePath, "utf8");
  const mdxSource = await serialize(fileContents, { parseFrontmatter: true });

  return mdxSource;
}
