import { TTypography } from "@/types";

export function TypographyH1({ children, classStyle }: TTypography) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${classStyle}`}
    >
      {children}
    </h1>
  );
}
