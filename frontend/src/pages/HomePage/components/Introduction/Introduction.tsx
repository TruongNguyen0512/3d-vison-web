import { TypographyH4, TypographyP } from "@/components/common/Typography";
import SloganImg from "@/assets/image5.png";
import GroupBtnAuth from "@/components/GroupBtnAuth";

export default function Introduction() {
  return (
    <div className="lg:flex lg:justify-start gap-10 my-20 lg:my-28">
      <div className="flex-1">
        <TypographyH4 classStyle="uppercase">
          ReadyFor Fundraising Service
        </TypographyH4>
        <img src={SloganImg} alt="slogan" className="width-full my-5" />
        <div className="flex justify-center lg:justify-start my-10">
          <GroupBtnAuth />
        </div>
      </div>
      <div className="flex-1 lg:pt-32">
        <TypographyP>
          Fundraising is about putting your value into words. Fundraising is
          about getting to know the people who support you. On top of that, we
          must raise sufficient funds to move toward the future we aim for.
        </TypographyP>
        <TypographyP>
          READYFOR has been developing a system called "crowdfunding" since its
          inception, ahead of the ever-changing society. We have come up with
          the essence of fundraising by confronting various social issues and
          listening carefully to the true feelings of many donors.
        </TypographyP>
        <TypographyP>
          Professionals will accompany you in the strategy and implementation of
          creating the "future".
        </TypographyP>
      </div>
    </div>
  );
}
