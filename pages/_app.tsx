import { Layout } from "@/features/layout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  );
}
