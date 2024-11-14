import { TTypography } from "@/types";

export function TypographyH4({ children, classStyle }: TTypography) {
  return (
    <h4
      className={`scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight ${classStyle}`}
    >
      {children}
    </h4>
  );
}
