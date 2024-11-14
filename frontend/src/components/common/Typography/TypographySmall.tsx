import { TTypography } from "@/types";

export function TypographySmall({ children, classStyle }: TTypography) {
  return (
    <small className={`text-sm font-medium leading-tight ${classStyle}`}>
      {children}
    </small>
  );
}
