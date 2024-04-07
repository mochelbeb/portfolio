import { existsSync } from "fs";
import path from "path";

export function getPublicPath(filePath: string) {
  return path.join(process.cwd(), "public", filePath);
}
export function lookupPublicFile(path: string, extension: string) {
  const isFile = existsSync(`${path}.${extension}`);
  const isIndex = existsSync(`${path}/index.${extension}`);
  if (!isFile && !isIndex) {
    console.error(`File not found: ${path}`);
    return;
  }

  if (isIndex) {
    return `${path}/index.${extension}`;
  } else if (isFile) {
    return `${path}.${extension}`;
  }
}
