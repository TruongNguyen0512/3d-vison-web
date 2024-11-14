import { TNavItem } from "@/types";
import { NavLink } from "react-router-dom";

export default function ServiceNav({ path, children }: TNavItem) {
  return (
    <NavLink
      to={path}
      className="block w-full h-max px-3 py-4 bg-black text-white cursor-pointer mb-3 lg:mb-0"
    >
      {children}
    </NavLink>
  );
}
