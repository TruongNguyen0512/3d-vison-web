import { TypographyH4, TypographyP } from "@/components/common/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TSolution = {
  id: string;
  description: string;
  title: string;
  content: string;
};

export default function CardSolution({
  id,
  description,
  title,
  content,
}: TSolution) {
  return (
    <Card>
      <CardHeader>
        <TypographyH4>{id}</TypographyH4>
        <CardDescription>{description}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyP>{content}</TypographyP>
      </CardContent>
    </Card>
  );
}
