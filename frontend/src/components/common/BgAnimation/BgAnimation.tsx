import useTailWindConfig from "@/hooks/useTailWindConfig";

export default function BgAnimation() {
  const { animationButton } = useTailWindConfig();
  return (
    <div
      className={`w-full h-full absolute top-0 left-[-110%] bg-gradient-to-tl from-[#FF51A9] to-[#F95F5E] z-0 group-hover:left-0 ${animationButton}`}
    ></div>
  );
}
