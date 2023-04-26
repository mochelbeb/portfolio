import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import AppBar, { navigation } from "./AppBar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const index = navigation.findIndex((link) => link.href == router.asPath);
  const prevIndex = navigation.findIndex(
    (link) => link.href == router.query.from
  );
  const ref = useRef<HTMLDivElement | null>(null);
  const [pressingLevel, setPressingLevel] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const direction = prevIndex < index ? "right" : "left";
  const handlers = useSwipeable({
    onSwiping: () => stillPressing(10),
  });
  const stillPressing = (incrementStep: number) => {
    setPressingLevel((prev) => Math.min(prev + incrementStep, 100));
    setIsPressing(true);
  };

  if (pressingLevel === 100) {
    router.push(
      navigation[navigation.findIndex((link) => link.href == router.asPath) + 1]
        .href
    );
    setPressingLevel(0);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPressing) {
      interval = setInterval(() => {
        setPressingLevel((prev) => {
          prev === 0 && setIsPressing(false);
          return Math.max(prev - 1, 0);
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isPressing, pressingLevel]);
  return (
    <>
      <div
        ref={(el) => {
          handlers.ref(el);
          ref.current = el;
        }}
        {...handlers.onMouseDown}
        className="min-h-screen overflow-y-auto overflow-x-hidden "
      >
        <AppBar ref={ref} />
        <motion.div
          initial={{
            x: direction === "left" ? "-100%" : "100%",
          }}
          animate={{ x: 0 }}
          exit={{
            x: direction === "left" ? "100%" : "-100%",
          }}
          transition={{
            duration: 0.5,
            ease: "backIn",
            type: "tween",
          }}
        >
          <main>{children}</main>
        </motion.div>
        <motion.div
          className="mx-auto h-2 rounded-md bg-purple-100"
          animate={{ width: `${pressingLevel}%` }}
          exit={{ width: "100%" }}
          transition={{
            type: "just",
          }}
        ></motion.div>
      </div>
    </>
  );
};
export default Layout;
