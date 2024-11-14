import { Link } from "react-router-dom";
import { TypographyP, TypographySmall } from "../common/Typography";
import { Card, CardContent, CardDescription } from "../ui/card";

type TNews = {
  publish: string;
  content: string;
  path: string;
};

export default function NewsCard({ publish, content, path }: TNews) {
  return (
    <Card className="flex gap-10 items-start bg-transparent border-0 rounded-none shadow-none border-b-2 border-b-gray-300 mb-3">
      <CardDescription>
        <TypographySmall>{publish}</TypographySmall>
      </CardDescription>
      <CardContent>
        <Link to={path}>
          <TypographyP classStyle="hover:text-[#888]">{content}</TypographyP>
        </Link>
      </CardContent>
      <br />
    </Card>
  );
}
