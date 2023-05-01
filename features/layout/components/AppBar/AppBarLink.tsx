import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
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
  const [toolTipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <MotionLink
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
          {!isDragging && (
            <Tooltip
              isOpen={toolTipOpen}
              setIsOpen={setTooltipOpen}
              className="tooltip absolute animate-appear rounded-xl border-2 border-white/20 bg-black/40 p-2 hover:animate-appear"
              id={item.href}
              place={tooltipPos[origin]}
            />
          )}
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
      </MotionLink>
    </>
  );
};
