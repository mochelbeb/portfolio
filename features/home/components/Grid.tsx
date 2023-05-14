import { Variants, motion, useAnimationControls } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
const variants: Variants = {
  wave: ({ columns, index, clickIndex }) => ({
    backgroundColor: ["#0000", "#f0f", "#0000"],
    transition: {
      duration: 0.5,
      delay: getDistance(columns, index, clickIndex) / 30,
    },
  }),
};
export type GridProps = {};
export const Grid: FC<GridProps> = ({}) => {
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });
  const [clickIndex, setClickIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const animatingCount = useRef(0);
  const animateControls = useAnimationControls();
  const calcGridSize = () => {
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);
    setGrid({ columns, rows });
  };

  const handleGridItemClick = (index: number) => {
    if (animatingCount.current !== 0) return;
    setToggle((prev) => !prev);
    setClickIndex(() => index);
    setTimeout(async () => {
      await animateControls.start("wave");
      animateControls.start("done");
    }, 0);
  };
  useEffect(() => {
    calcGridSize();
    window.addEventListener("resize", calcGridSize);
    return () => window.removeEventListener("resize", calcGridSize);
  }, []);

  return (
    <div className="relative h-[100vh]">
      <div
        className="absolute z-30 grid"
        style={{
          gridTemplateColumns: `repeat(${grid.columns}, minmax(50px,1fr))`,
          gridTemplateRows: `repeat(${grid.columns}, minmax(50px,1fr))`,
        }}
      >
        {[...Array(grid.columns * grid.rows)].map((_, index) => (
          <motion.div
            custom={{ columns: grid.columns, index, clickIndex }}
            variants={variants}
            onAnimationStart={() => animatingCount.current++}
            onAnimationComplete={() => animatingCount.current--}
            onClick={() => handleGridItemClick(index)}
            animate={animateControls}
            key={index}
            className="relative"
          >
            <div className="absolute inset-0 h-full w-full cursor-pointer hover:bg-[#ddd1]"></div>
          </motion.div>
        ))}
      </div>
      <div className="absolute z-0 flex h-full items-center  text-4xl">
        Islam Naasani
      </div>
    </div>
  );
};
function getDistance(width: number, index1: number, index2: number) {
  let x1 = Math.floor(index1 / width);
  let y1 = index1 % width;
  let x2 = Math.floor(index2 / width);
  let y2 = index2 % width;
  console.log(
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
    index1,
    index2
  );

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
