import { navigation } from "@/constants/navigation";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { AppBarOrigin } from ".";
//? previously rotate: "0deg" after a yarn-upgrade-all it stopped working
// and this for some reason fixed it
const linkVariants = {
  top: {
    transform: "rotate(0deg)",
  },
  bottom: { transform: "rotate(0deg)" },
  left: {
    transform: "rotate(-90deg)",
  },
  right: {
    transform: "rotate(-90deg)",
  },
} satisfies Variants;

const tooltipPos = {
  right: "left",
  left: "right",
  top: "bottom",
  bottom: "top",
} as const;
export type LinkProps = {
  item: (typeof navigation)[number];
  origin: AppBarOrigin;
  isDragging: boolean;
};
export const AppBarLink: FC<LinkProps> = ({ item, origin, isDragging }) => {
  const path = useRouter().pathname;
  return (
    <>
      <Link
        as={item.href}
        href={{ pathname: item.href, query: { from: path } }}
        className={
          "pointer-events-auto border-y-2 border-solid border-transparent " +
          (isDragging ? "pointer-events-none" : "")
        }
        aria-label={item.name}
        aria-current={path === item.href ? "page" : undefined}
        data-tooltip-id={item.href}
        data-tooltip-content={item.name}
      >
        {path === item.href && ["top", "right"].includes(origin) && (
          <motion.div
            className="mb-1 h-1  rounded-sm"
            style={{ backgroundColor: item.color }}
            layoutId="AppBarIndicator"
          />
        )}
        {path !== item.href && ["top", "right"].includes(origin) && (
          <motion.div className="mb-1 h-1 " />
        )}
        <motion.div
          animate={origin}
          variants={linkVariants}
          transition={{ type: "spring" }}
        >
          {<item.icon className="h-10 w-10" />}
        </motion.div>

        {path === item.href && ["left", "bottom"].includes(origin) && (
          <motion.div
            className="mt-1 h-1 rounded-sm"
            style={{ backgroundColor: item.color }}
            layoutId="AppBarIndicator"
          />
        )}
        {path !== item.href && ["top", "right"].includes(origin) && (
          <motion.div className="mt-1 h-1 " />
        )}
      </Link>
    </>
  );
};
