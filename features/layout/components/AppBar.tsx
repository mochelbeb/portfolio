import { Variants, motion, useAnimation, useDragControls } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
export const navigation = [
  { name: "home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
];
const MotionLink = motion(Link);
const screenHeight =
  typeof window !== "undefined"
    ? document.documentElement.getBoundingClientRect().height
    : 0;
const screenWidth =
  typeof window !== "undefined"
    ? document.documentElement.getBoundingClientRect().width
    : 0;
const containerVariantsGenerator = (height: number) =>
  ({
    top: {
      x: 0,
      y: 0,
      marginTop: 10,
    },
    bottom: {
      x: 0,
      y: screenHeight - height - 20,
      marginBottom: 10,
    },
    dragging: {
      borderRadius: "10px",
    },
    notDragging: {
      // width: "100vw",
    },
    small: {
      minWidth: "fit-content",
      borderRadius: "20px",
    },
    visible: {
      opacity: 1,
    },
  } satisfies Variants);

export type AppBarProps = {};
export const AppBar = forwardRef(function Fr(
  {}: AppBarProps,
  pageRef: ForwardedRef<HTMLDivElement>
) {
  const path = useRouter().pathname;
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useDragControls();
  const [origin, setOrigin] = useState<"top" | "bottom" | "dragging">("top");
  const animationControls = useAnimation();
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerVariants = useMemo(
    () => containerVariantsGenerator(rect.height),
    [rect.height]
  );
  useEffect(() => {
    setRect({
      width: ref.current?.clientWidth ?? 0,
      height: ref.current?.clientHeight ?? 0,
    });
  }, [ref.current?.clientWidth]);
  useEffect(() => {
    const mouseMoveListener = (event: MouseEvent) => {
      setMousePos({ x: event.pageX, y: event.pageY });
    };
    document.addEventListener("mousemove", mouseMoveListener);
    return () => document.removeEventListener("mousemove", mouseMoveListener);
  }, []);
  useEffect(() => {
    animationControls.start(["small", "top", "visible"], {
      delay: 0.25,
    });
  }, [animationControls]);
  return (
    <motion.nav
      ref={ref}
      className="fixed z-50 flex justify-center  gap-1 bg-primary-900 p-4"
      drag
      style={{
        right: (screenWidth - rect.width) / 2,
        opacity: 0,
      }}
      dragConstraints={{
        top: 0,
        bottom: screenHeight - rect.height,
      }}
      draggable
      onDragStart={() => {
        animationControls.start("dragging");
      }}
      onDragEnd={() => {
        animationControls.start(["small", "notDragging", origin], {
          type: "spring",
          bounce: 0.4,
        });
      }}
      onDrag={(_, info) => {
        if (!info) return;
        if (info.point.y > screenHeight / 2) {
          setOrigin("bottom");
        } else {
          setOrigin("top");
        }
      }}
      dragControls={controls}
      animate={animationControls}
      variants={containerVariants}
      transition={{
        type: "tween",
      }}
      dragMomentum={false}
    >
      {navigation.map((item, index) => (
        <MotionLink
          as={item.href}
          key={item.name}
          href={{ pathname: item.href, query: { from: path } }}
          className={
            "border-y-2 border-solid border-transparent " +
            (origin === "bottom"
              ? "hover:border-t-white"
              : "hover:border-b-white")
          }
          animate={origin}
          aria-current={path === item.href ? "page" : undefined}
        >
          {item.name}
        </MotionLink>
      ))}
    </motion.nav>
  );
});

export default AppBar;
