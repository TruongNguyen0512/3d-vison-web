import { TypographySmall } from "@/components/common/Typography";
import { NavLink } from "react-router-dom";

type THashtag = {
  path: string;
  nameHashTag: string;
};

export default function HashTag({ path, nameHashTag }: THashtag) {
  return (
    <NavLink to={path} className="px-2 py-3 cursor-pointer group">
      <TypographySmall classStyle="text-[#73797E] group-hover:text-[#f50057]">
        #{nameHashTag}
      </TypographySmall>
    </NavLink>
  );
}
