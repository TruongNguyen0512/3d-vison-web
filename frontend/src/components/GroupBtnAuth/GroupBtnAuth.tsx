import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import useTailWindConfig from "@/hooks/useTailWindConfig";
import Btn from "../common/Btn";

export default function GroupBtnAuth() {
  const { animationButton } = useTailWindConfig();
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <Btn>
        <NavLink
          to="/auth/login"
          className={`flex justify-center items-center group-hover:text-white text-sm  ${animationButton}`}
        >
          Login <ChevronRight />
        </NavLink>
      </Btn>
      <Btn>
        <NavLink
          to="/auth/register"
          className={`flex justify-center items-center group-hover:text-white text-sm ${animationButton}`}
        >
          Register <ChevronRight />
        </NavLink>
      </Btn>
    </div>
  );
}
