import { Rect } from "@/types/common";
import { useEffect, useState } from "react";

export const useScreenRect = () => {
  const [screenRect, setScreenRect] = useState<Rect>({ width: 0, height: 0 });
  useEffect(() => {
    const resizerListener = () => {
      setScreenRect({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    setScreenRect({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", resizerListener);

    return () => window.removeEventListener("resize", resizerListener);
  }, []);
  return screenRect;
};
