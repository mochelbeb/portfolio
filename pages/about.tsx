import Layout from "@/features/layout/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

export default function Page() {
  const handlers = useSwipeable({
    onSwiping: (data) => console.log(data),
    trackMouse: true,
  });

  return (
    <Layout>
      <Head>
        <title>About | Islam Naasani</title>
        <meta name="description" content="Islam Naasani's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <h1
          {...handlers}
          className="mx-auto  flex  w-fit flex-col  gap-1 pt-32 font-[cursive] text-9xl uppercase text-stone-100"
        >
          <span className="justify-self-start">
            <span className="text-purple-500">A</span>BOU
            <span className="text-purple-500">T</span>
          </span>
        </h1>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <Link as="/" href={{ pathname: "/", query: { from: "/about" } }}>
          Home
        </Link>
      </main>
    </Layout>
  );
}
