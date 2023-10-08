import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog | Islam Naasani",
};
export default async function Page() {
  return (
    <>
      <div className="text-3xl flex flex-col items-center mt-[10%]">
        <h2 className="text-7xl mb-20">Blog</h2>
        <p> Coming Soon...</p>
        <Link href="/" className="underline text-lg">
          return to home
        </Link>
      </div>
    </>
  );
}
