import { TTypography } from "@/types";

export function TypographyH3({ children, classStyle }: TTypography) {
  return (
    <h3
      className={`scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight ${classStyle}`}
    >
      {children}
    </h3>
  );
}
