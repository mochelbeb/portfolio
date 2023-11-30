"use client";
import MDXComponents from "@/components/ui/md";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import "./globals.css";
import AppBar from "./layout/AppBar";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="dark bg-background flex flex-col h-full min-h-screen w-full overflow-y-auto overflow-x-hidden">
        <main className="flex-1">
          <MDXProvider components={MDXComponents}>
            <AppBar />
            {children}
          </MDXProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
