import { Rect } from "@/types/common";
import { Variants } from "framer-motion";

type ContainerVariantParams = {
  rect: Rect;
  screenRect: Rect;
};
export const appBarVariants = ({ rect, screenRect }: ContainerVariantParams) =>
  ({
    top: {
      x: 0,
      y: 0,
      left: (screenRect.width - rect.width + 10) / 2,
      top: 10,
      rotate: "0deg",
    },
    bottom: {
      x: 0,
      y: screenRect.height - rect.height - 10,
      left: (screenRect.width - rect.width + 10) / 2,
      top: "unset",
      rotate: "0deg",
    },
    left: {
      x: 0,
      y: 0,
      left: -rect.width * 0.2,
      top: (screenRect.height - rect.height) / 2,
      rotate: "90deg",
    },
    right: {
      x: 0,
      y: 0,
      left: screenRect.width - rect.width / 1.1,
      top: (screenRect.height - rect.height) / 2,
      rotate: "90deg",
    },
    draggingHorizontal: {
      rotate: "0deg",
    },
    draggingVertical: {
      rotate: "90deg",
    },
    visible: {
      opacity: 1,
    },
  }) satisfies Variants;
export const hideOnScrollVariants = (
  containerVariants: ReturnType<typeof appBarVariants>,
  screenRect: Rect,
  AppBarRect: Rect,
) => ({
  top: {
    hide: {
      y: -1.5 * AppBarRect.height,
    },
    show: {
      y: containerVariants["top"].y,
    },
  },
  bottom: {
    hide: { y: screenRect.height + 1.5 * AppBarRect.height },
    show: { y: containerVariants["bottom"].y },
  },
  left: {
    hide: {
      x: -1.5 * AppBarRect.width,
    },
    show: { x: 0 },
  },
  right: {
    hide: {
      x: 1.5 * AppBarRect.width,
    },
    show: { x: 0 },
  },
});
