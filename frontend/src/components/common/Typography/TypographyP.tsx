import { TTypography } from "@/types";

export function TypographyP({ children, classStyle }: TTypography) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${classStyle}`}>
      {children}
    </p>
  );
}
