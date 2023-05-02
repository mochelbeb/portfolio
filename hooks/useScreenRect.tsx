import { Rect } from "@/types/common";
import { useEffect, useState } from "react";

export const useScreenRect = () => {
  const [screenRect, setScreenRect] = useState<Rect>({ width: 0, height: 0 });
  useEffect(() => {
    const resizerListener = () => {
      const screenRect = document.documentElement.getBoundingClientRect();
      setScreenRect({
        width: screenRect.width,
        height: screenRect.height,
      });
    };
    const screenRect = document.documentElement.getBoundingClientRect();

    setScreenRect({
      width: screenRect.width,
      height: screenRect.height,
    });
    window.addEventListener("resize", resizerListener);

    return () => window.removeEventListener("resize", resizerListener);
  }, []);
  return screenRect;
};
