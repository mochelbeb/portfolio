import Head from "next/head";
import { About } from "./home/About";
import { Header } from "./home/Header";
import { Skills } from "./home/Skills";
export default function Page() {
  return (
    <>
      <Head>
        <title>Islam Naasani</title>
        <meta name="description" content="Islam Naasani's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Skills />
      <div className="h-[200vh]" />
    </>
  );
}
