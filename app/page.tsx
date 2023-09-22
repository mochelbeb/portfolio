import { Metadata } from "next";
import { About } from "./home/About";
import { Experience } from "./home/Experience";
import { Footer } from "./home/Footer";
import { Header } from "./home/Header";
import { Projects } from "./home/Projects";
import { Skills } from "./home/Skills";

export const metadata: Metadata = {
  title: "Islam Naasani",
  description: "Islam Naasani's Personal Website",
  icons: ["/favicon.ico"],
};

export default function Page() {
  return (
    <>
      <div className="px-2 md:px-10 flex flex-col gap-52">
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
