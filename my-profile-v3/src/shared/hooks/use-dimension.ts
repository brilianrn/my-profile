import { useEffect, useRef } from "react";

interface Dimensions {
  width: number;
  height: number;
}

interface RefObjectWithCurrent<T> {
  current: T | null;
}

export const useDimensions = (ref: RefObjectWithCurrent<HTMLElement>) => {
  const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
