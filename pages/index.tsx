import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Islam Naasani</title>
        <meta name="description" content="Islam Naasani's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mx-auto  flex  w-fit flex-col gap-1 pt-32 font-[cursive] text-9xl uppercase text-stone-100">
        <span className="justify-self-start">
          <span className="text-purple-500">A</span>bd
        </span>{" "}
        <span className="pl-20">
          Naasani
          <span className="text-purple-500">o</span>
        </span>
      </h1>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <Link as="/about" href={{ pathname: "/about", query: { from: "/" } }}>
        About
      </Link>
    </>
  );
}
