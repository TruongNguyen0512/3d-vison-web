import { TNavItem } from "@/types";
import { NavLink } from "react-router-dom";

export default function NavItem({ path, children }: TNavItem) {
  return (
    <NavLink
      to={path}
      className="font-bold text-lg lg:text-base lg:font-semibold hover:text-[#73797e]"
    >
      {children}
    </NavLink>
  );
}
