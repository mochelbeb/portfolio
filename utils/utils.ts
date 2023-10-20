import path from "path";

export function getPublicPath(filePath: string) {
  return path.join(process.cwd(), "public", filePath);
}
