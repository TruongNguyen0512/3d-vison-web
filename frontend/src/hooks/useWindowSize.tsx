import { useState, useEffect } from "react";

type TSize = {
  width: number;
  height: number;
};

type TUseWindowSize = () => TSize;

const useWindowSize: TUseWindowSize = () => {
  const [windowSize, setWindowSize] = useState<TSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
