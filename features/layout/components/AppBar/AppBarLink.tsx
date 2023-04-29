import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Tooltip } from "react-tooltip";
import { AppBarOrigin, navigation } from ".";
const linkVariants = {
  top: {
    rotate: "0deg",
  },
  bottom: {
    rotate: "0deg",
  },
  left: {
    rotate: "-90deg",
  },
  right: {
    rotate: "-90deg",
  },
} satisfies Variants;

const MotionLink = motion(Link);
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
  console.log(path, item.href);
//TODO hide tooltip after hover (need keyframe animation)
  return (
    <>
      <MotionLink
        as={item.href}
        key={item.name}
        href={{ pathname: item.href, query: { from: path } }}
        className={
          "pointer-events-auto border-y-2 border-solid border-transparent [&>.tooltip]:hover:opacity-100 [&>.tooltip]:focus:opacity-100 " +
          (isDragging ? "pointer-events-none" : "")
        }
        animate={origin}
        variants={linkVariants}
        transition={{ type: "spring" }}
        aria-label={item.name}
        aria-current={path === item.href ? "page" : undefined}
        data-tooltip-id={item.href}
        data-tooltip-content={item.name}
      >
        {<item.icon className="h-10 w-10" />}
        {!isDragging && (
          <Tooltip
            isOpen
            className="tooltip absolute rounded-xl border-2 border-white/20 bg-black/40 p-2 opacity-0 transition-opacity duration-500"
            id={item.href}
            place={tooltipPos[origin]}
          />
        )}
        {path === item.href && (
          <motion.div
            className="mt-1 h-1  bg-white"
            layoutId="AppBarIndicator"
          />
        )}
      </MotionLink>
    </>
  );
};
