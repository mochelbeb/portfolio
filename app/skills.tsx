import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>About | Islam Naasani</title>
        <meta name="description" content="Islam Naasani's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mx-auto  flex  w-fit flex-col  gap-1 pt-32 font-[cursive] text-9xl uppercase text-stone-100">
        <span className="justify-self-start">
          <span className="text-purple-500">S</span>KILL
          <span className="text-purple-500">S</span>
        </span>
      </h1>
    </>
  );
}
