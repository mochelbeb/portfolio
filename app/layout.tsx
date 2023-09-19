"use client";
import { MouseTracer } from "@/components/MouseTracer";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";
import "./globals.css";
import AppBar from "./layout/AppBar";

export default function App({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark bg-background flex h-full min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <main className="flex-1">
          <MDXProvider components={{}}>
            <AnimatePresence initial={false}>
              <Fragment key={pathname}>
                <AppBar />
                {children}
              </Fragment>
              <MouseTracer />
            </AnimatePresence>
          </MDXProvider>
        </main>
      </body>
    </html>
  );
}
