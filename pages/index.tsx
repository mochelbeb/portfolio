import { MouseTracer } from "@/components/MouseTracer";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Islam Naasani</title>
        <meta name="description" content="Islam Naasani's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MouseTracer />
    </>
  );
}
