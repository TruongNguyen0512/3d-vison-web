import Btn from "@/components/common/Btn";
import { TypographyH4, TypographyP } from "@/components/common/Typography";
import { MoveUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-[#f9f9f9] h-full py-16 border-b-black-100">
      <div className="w-full max-w-[1200px] mx-auto px-10 xl:flex justify-between items-start">
        <NavLink to="/">
          <TypographyH4>READYFOR</TypographyH4>
          <TypographyH4>FUNDRAISING SERVICE</TypographyH4>
        </NavLink>
        <div className="flex justify-between gap-5 my-5 xl:gap-20 xl:my-0">
          <div className="flex-1">
            <TypographyH4>Service</TypographyH4>
            <ul>
              <li>
                <Link to="/">
                  <TypographyP classStyle="!font-medium">
                    – Thiết kế
                  </TypographyP>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <TypographyP classStyle="!font-medium">
                    – Thực hiện
                  </TypographyP>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <TypographyH4>Case</TypographyH4>
            <ul>
              <li>
                <NavLink to="/news">
                  <TypographyP classStyle="!font-medium text-left">
                    News
                  </TypographyP>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex justify-between items-center">
                  <TypographyP classStyle="!font-medium text-left">
                    Compony
                  </TypographyP>
                  <MoveUpRight />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex justify-between items-center">
                  <TypographyP classStyle="!font-medium text-left">
                    Recruit
                  </TypographyP>
                  <MoveUpRight />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 h-max">
          <Btn>Yêu cầu Thông tin</Btn>
          <Btn>Liên lạc chứng tôi</Btn>
        </div>
      </div>
    </div>
  );
}
