import { TypographyH2, TypographySmall } from "../Typography";

type THeadingSection = {
  sectionName: string;
  des: string;
  className?: string;
};

export default function HeadingSection({
  sectionName,
  des,
  className,
}: THeadingSection) {
  return (
    <div className={`${className}`}>
      <TypographySmall>{sectionName}</TypographySmall>
      <TypographyH2 classStyle="py-4">{des}</TypographyH2>
    </div>
  );
}
