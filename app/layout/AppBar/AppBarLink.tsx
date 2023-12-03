import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { AppBarOrigin } from ".";
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
export type LinkProps = {
  item: (typeof navigation)[number];
  origin: AppBarOrigin;
  isDragging: boolean;
};
export const AppBarLink: FC<LinkProps> = ({ item, origin, isDragging }) => {
  const path = usePathname();
  const isActive =
    (item.startWith && path.startsWith(item.href)) || path == item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        "pointer-events-auto flex justify-center border-y-2 border-solid border-transparent text-center",
        (origin === "right" || origin === "left") && "py-1.5",
        isDragging && "pointer-events-none",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <motion.div
        animate={origin}
        variants={linkVariants}
        transition={{ type: "spring" }}
        className="flex flex-col items-center justify-center"
      >
        <motion.span
          style={{
            color: isActive ? item.color : "var(--foreground)",
          }}
        >
          {item.name}
        </motion.span>
      </motion.div>
    </Link>
  );
};
