import { TTypography } from "@/types";

export function TypographyH2({ children, classStyle }: TTypography) {
  return (
    <h2
      className={`scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 ${classStyle}`}
    >
      {children}
    </h2>
  );
}
