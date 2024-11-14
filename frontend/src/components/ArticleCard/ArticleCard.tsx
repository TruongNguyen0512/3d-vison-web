import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { TypographyH4 } from "../common/Typography";

type TArticle = {
  id: string;
  thumnail: string;
  title: string;
  publish?: string;
};

export default function ArticleCard({
  id,
  thumnail,
  title,
  publish,
}: TArticle) {
  return (
    <NavLink to={`article/${id}`} className="cursor-pointer bg-transparent">
      <Card className="overflow-hidden hover:-translate-y-2 transition-all duration-500 border-none">
        <img
          src={thumnail}
          alt="article-thumnail"
          className="object-cover transition-all duration-500 hover:scale-110"
        />
        <CardHeader>
          <TypographyH4>{title}</TypographyH4>
          {publish ? <CardDescription>{publish}</CardDescription> : <></>}
        </CardHeader>
      </Card>
    </NavLink>
  );
}
