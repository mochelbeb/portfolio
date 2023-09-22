"use client";
import { MouseTracer } from "@/components/MouseTracer";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import "./globals.css";
import AppBar from "./layout/AppBar";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark bg-background flex h-full min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <main className="flex-1">
          <MDXProvider components={{}}>
            <AppBar />
            {children}
            <MouseTracer />
          </MDXProvider>
        </main>
      </body>
    </html>
  );
}
