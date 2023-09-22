"use client";

import { navigation } from "@/constants/navigation";
import usePrevious from "@/hooks/usePrevious";
import { useScreenRect } from "@/hooks/useScreenRect";
import storage from "@/utils/storage";
import { PanInfo, motion, useAnimation, useDragControls } from "framer-motion";
import { Grip } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppBarLink } from "./AppBarLink";
import { appBarVariants, hideOnScrollVariants } from "./appBarFramerVariants";
export type AppBarOrigin = "top" | "bottom" | "left" | "right";

export type AppBarProps = {};
export const AppBar = ({}: AppBarProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [storedOrigin, setStoredOrigin] = useState<AppBarOrigin>("bottom");
  const [origin, setOrigin] = useState<AppBarOrigin>("bottom");
  const animationControls = useAnimation();
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const screenRect = useScreenRect();
  const prevScreenRect = usePrevious(screenRect);
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const navVariants = useMemo(
    () => appBarVariants({ screenRect, rect }),
    [rect, screenRect],
  );

  const handleOriginChange = (_: Event, info: PanInfo) => {
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
  };
  useEffect(() => {
    setRect({
      width: ref.current?.clientWidth ?? 0,
      height: ref.current?.clientHeight ?? 0,
    });
  }, []);

  useEffect(() => {
    if (prevScreenRect !== screenRect) {
      const timeout = setTimeout(() => animationControls.start(origin), 10);
      return () => clearTimeout(timeout);
    }
  }, [animationControls, origin, prevScreenRect, screenRect]);

  useEffect(() => {
    animationControls.start("visible", {
      delay: 0.25,
    });
  }, [animationControls, storedOrigin]);

  useEffect(() => {
    const storedAppBarOrigin = storage.getAppBarOrigin() ?? "top";
    setOrigin(storedAppBarOrigin);
    setStoredOrigin(storedAppBarOrigin);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    let startAnimation = false;
    let lastShowOrHide: "show" | "hide" | null = null;
    const scrollEventListener = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const hideOrShow = scrollTop > lastScrollTop ? "hide" : "show";
      startAnimation = lastShowOrHide !== hideOrShow;
      lastShowOrHide = hideOrShow;
      if (startAnimation) {
        animationControls.start(
          hideOnScrollVariants(navVariants, screenRect, rect)[origin][
            hideOrShow
          ],
        );
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", scrollEventListener);
    return () => window.removeEventListener("scroll", scrollEventListener);
  }, [
    animationControls,
    navVariants,
    origin,
    rect,
    screenRect,
    screenRect.height,
    screenRect.width,
  ]);
  return (
    <motion.nav
      ref={ref}
      className="pointer-events-none fixed z-50 flex w-fit justify-center gap-2 rounded-3xl bg-background/60 p-4 opacity-0"
      drag
      style={navVariants[storedOrigin]}
      draggable
      layout
      layoutRoot
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDrag={handleOriginChange}
      onDragEnd={() => {
        animationControls.start(origin);
        storage.setAppBarOrigin(origin);
        setIsDragging(false);
      }}
      dragControls={dragControls}
      animate={animationControls}
      variants={navVariants}
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
      <Grip
        role="button"
        className="pointer-events-auto m-auto h-6 w-6 text-muted-foreground"
      />
    </motion.nav>
  );
};

export default AppBar;
