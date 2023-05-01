import { Variants, motion, useAnimation, useDragControls } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FcBusinessContact, FcIdea, FcSupport } from "react-icons/fc";
import { MdDragIndicator } from "react-icons/md";
import { AppBarLink } from "./AppBarLink";
export const navigation = [
  { name: "home", href: "/", icon: FcBusinessContact, color: "#673AB7" },
  { name: "About", href: "/about", icon: FcIdea, color: "#FBC02D" },
  { name: "Skills", href: "/skills", icon: FcSupport, color: "#607D8B" },
];
export type AppBarOrigin = "top" | "bottom" | "left" | "right";
type ContainerVariantParams = {
  rect: { width: number; height: number };
  screenRect: { width: number; height: number };
};
const containerVariantsGenerator = ({
  rect,
  screenRect,
}: ContainerVariantParams) =>
  ({
    top: {
      x: 0,
      y: 0,
      marginTop: 10,
      right: (screenRect.width - rect.width) / 2,
      top: "unset",
      rotate: "0deg",
    },
    bottom: {
      x: 0,
      y: screenRect.height - rect.height - 20,
      marginBottom: 10,
      right: (screenRect.width - rect.width) / 2,
      top: "unset",
      rotate: "0deg",
    },
    left: {
      x: 0,
      y: 0,
      right: screenRect.width - rect.width + rect.width / 8,
      top: (screenRect.height - rect.width) / 2,
      rotate: "90deg",
    },
    right: {
      x: 0,
      y: 0,
      right: -rect.width / 8,
      top: (screenRect.height - rect.width) / 2,
      rotate: "90deg",
    },
    draggingHorizontal: {
      rotate: "0deg",
    },
    draggingVertical: {
      rotate: "90deg",
    },
    small: {},
    visible: {
      opacity: 1,
    },
  } satisfies Variants);

export type AppBarProps = {};
export const AppBar = ({}: AppBarProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [storedOrigin, setStoredOrigin] = useState<AppBarOrigin>("top");
  const [origin, setOrigin] = useState<AppBarOrigin>("top");
  const animationControls = useAnimation();
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const [screenRect, setScreenRect] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const containerVariants = useMemo(
    () => containerVariantsGenerator({ screenRect, rect }),
    [rect, screenRect]
  );
  useEffect(() => {
    setRect({
      width: ref.current?.clientWidth ?? 0,
      height: ref.current?.clientHeight ?? 0,
    });
  }, []);

  useEffect(() => {
    const resizerListener = () => {
      const screenRect = document.documentElement.getBoundingClientRect();
      setScreenRect({
        width: screenRect.width,
        height: screenRect.height,
      });
      setTimeout(() => animationControls.start(origin), 10);
    };
    if (typeof window !== "undefined") {
      const screenRect = document.documentElement.getBoundingClientRect();

      setScreenRect({
        width: screenRect.width,
        height: screenRect.height,
      });
      window.addEventListener("resize", resizerListener);
    }
    return () => window.removeEventListener("resize", resizerListener);
  }, [animationControls, origin]);
  useEffect(() => {
    animationControls.start(["small", "visible"], {
      delay: 0.25,
    });
  }, [animationControls, storedOrigin]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(
        (localStorage.getItem("appBarOrigin") as AppBarOrigin) ?? "top"
      );
      setStoredOrigin(
        (localStorage.getItem("appBarOrigin") as AppBarOrigin) ?? "top"
      );
    }
  }, []);
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollEventListener = (e: Event) => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const hide = scrollTop > lastScrollTop;
      switch (origin) {
        case "bottom":
          if (hide) {
            animationControls.start({
              y: screenRect.height + 1.5 * rect.height,
            });
          } else {
            animationControls.start({ y: containerVariants["bottom"].y });
          }
          break;
        case "top":
          if (hide) {
            animationControls.start({
              y: -1.5 * rect.height,
            });
          } else {
            animationControls.start({ y: containerVariants["top"].y });
          }
          break;
        case "left":
          if (hide) {
            animationControls.start({
              x: -1.5 * rect.width,
            });
          } else {
            animationControls.start({ x: 0 });
          }
          break;
        case "right":
          if (hide) {
            animationControls.start({
              x: 1.5 * rect.width,
            });
          } else {
            animationControls.start({ x: 0 });
          }
          break;
      }
    };
    window.addEventListener("scroll", scrollEventListener);
    return () => window.removeEventListener("scroll", scrollEventListener);
  }, [
    animationControls,
    containerVariants,
    origin,
    rect,
    screenRect.height,
    screenRect.width,
  ]);
  return (
    <motion.nav
      ref={ref}
      className="pointer-events-none fixed z-50 flex  justify-center gap-1 bg-white/5 p-4"
      drag
      style={{
        ...containerVariants[storedOrigin],
        minWidth: "fit-content",
        opacity: 0,
        borderRadius: "20px",
      }}
      draggable
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDragEnd={() => {
        animationControls.start(["small", origin], {
          type: "tween",
          bounce: 0.4,
        });
        localStorage.setItem("appBarOrigin", origin);
        setIsDragging(false);
      }}
      onDrag={(_, info) => {
        if (!info) return;
        if (info.point.x < screenRect.width / 4) {
          animationControls.start("draggingVertical");
          setOrigin("left");
        } else if (info.point.x > (3 * screenRect.width) / 4) {
          animationControls.start("draggingVertical");
          setOrigin("right");
        } else if (info.point.y < screenRect.height / 2) {
          animationControls.start("draggingHorizontal");
          setOrigin("top");
        } else if (info.point.y > screenRect.height / 2) {
          animationControls.start("draggingHorizontal");
          setOrigin("bottom");
        }
      }}
      dragControls={dragControls}
      animate={animationControls}
      variants={containerVariants}
      transition={{
        type: "tween",
      }}
      dragMomentum={false}
    >
      {navigation.map((item, index) => (
        <AppBarLink
          item={item}
          isDragging={isDragging}
          key={index}
          origin={origin}
        />
      ))}
      <MdDragIndicator className="pointer-events-auto m-auto h-7 w-7" />
    </motion.nav>
  );
};

export default AppBar;
