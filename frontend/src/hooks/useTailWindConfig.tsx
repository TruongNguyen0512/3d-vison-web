import { useMemo } from "react";

const useTailWindConfig = () => {
  const animationButton = useMemo(
    () => `ease-linear transition-all duration-400`,
    []
  );
  const animationArticleCard = useMemo(() => `trasition-all`, []);
  return { animationButton, animationArticleCard };
};

export default useTailWindConfig;
