import Head from "next/head";
import { About } from "./home/About";
import { Experience } from "./home/Experience";
import { Footer } from "./home/Footer";
import { Header } from "./home/Header";
import { Projects } from "./home/Projects";
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
      <div className="px-2 md:px-10 flex flex-col gap-10">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
