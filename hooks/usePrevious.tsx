import { useEffect, useRef } from "react";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  const setPrevious = (value: T) => {
    ref.current = value;
  };
  return [ref.current, setPrevious] as const;
}
export default usePrevious;
