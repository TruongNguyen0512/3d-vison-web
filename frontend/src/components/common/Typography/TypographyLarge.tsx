import { TTypography } from "@/types";

export function TypographyLarge({ children, classStyle }: TTypography) {
  return (
    <div className={`text-base lg:text-lg font-semibold ${classStyle}`}>
      {children}
    </div>
  );
}
