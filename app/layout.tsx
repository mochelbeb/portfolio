"use client";
import { MouseTracer } from "@/components/MouseTracer";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import "./globals.css";
import AppBar from "./layout/AppBar";

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark bg-background flex h-full min-h-screen w-full overflow-y-auto overflow-x-hidden  px-3 md:px-10">
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <AppBar />
            {children}
            <MouseTracer />
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}
