import BackGround from "@/assets/image1.png";

export default function Content({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative w-full h-max overflow-hidden mt-16">
      <img
        src={BackGround}
        alt="bg"
        className="absolute top-0 right-[-80%] -z-10 !max-w-[560px] lg:!max-w-[100%]  lg:right-[-40%]"
      />
      <div
        className={`realative z-20 mx-auto max-w-[1200px] w-full px-5 xl:px-0 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
