import { TypographyLarge, TypographyP } from "../common/Typography";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type TCardMember = {
  avatar: string;
  userName: string;
  position: string;
  introduction: string;
};

export default function MemberCard({
  avatar,
  userName,
  position,
  introduction,
}: TCardMember) {
  return (
    <Card className="py-5 flex flex-col justify-between items-center xl:p-5">
      <div className="w-[40%] rounded-full overflow-hidden">
        <img src={avatar} alt="avatar" className="w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-center">{userName}</CardTitle>
        <TypographyLarge>{position}</TypographyLarge>
      </CardHeader>
      <CardContent>
        <TypographyP classStyle="text-sm">{introduction}</TypographyP>
      </CardContent>
    </Card>
  );
}
