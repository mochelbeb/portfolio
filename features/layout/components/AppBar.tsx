import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export const navigation = [
  { name: "home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
];

export default function AppBar() {
  const path = useRouter().pathname;
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(ref.current?.offsetHeight ?? 0);
  }, []);
  return (
    <>
      <nav ref={ref} className="fixed left-0 right-0 top-0 z-50  bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <Link
                      as={item.href}
                      key={item.name}
                      href={{ pathname: item.href, query: { from: path } }}
                      className={
                        (path === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white") +
                        " rounded-md px-3 py-2 text-sm font-medium"
                      }
                      aria-current={path === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height }} />
    </>
  );
}
