import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import AppBar, { navigation } from "./AppBar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const index = navigation.findIndex((link) => link.href == router.asPath);
  const prevIndex = navigation.findIndex(
    (link) => link.href == router.query.from
  );
  const direction = prevIndex < index ? "right" : "left";

  return (
    <>
      <AppBar />
      <div className="h-[100vh] overflow-y-auto overflow-x-hidden">
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
            ease: "backInOut",
            type: "tween",
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
export default Layout;
