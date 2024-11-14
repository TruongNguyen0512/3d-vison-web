import { TypographyP, TypographySmall } from "../common/Typography";
import { Card, CardContent, CardDescription } from "../ui/card";

type TNews = {
  publish: string;
  content: string;
};

export default function NewsCard({ publish, content }: TNews) {
  return (
    <Card className="flex gap-10 items-start  border-none bg-transparent shadow-none">
      <CardDescription>
        <TypographySmall>{publish}</TypographySmall>
      </CardDescription>
      <CardContent>
        <TypographyP>{content}</TypographyP>
      </CardContent>
    </Card>
  );
}
