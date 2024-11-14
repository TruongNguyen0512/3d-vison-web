import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GroupBtnAuth from "@/components/GroupBtnAuth";
export default function Header() {
  return (
    <div className=" fixed top-0 left-0 w-full h-max z-50">
      <div className="w-full h-16 bg-white shadow-lg flex items-center justify-between px-5 py-4">
        <NavLink to="/" className="text-base font-semibold uppercase">
          <p>ReadyFor</p>
          <p>Fundraising service</p>
        </NavLink>
        {/* Nav Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className=" cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetClose className="text-2xl" />
              <SheetDescription>
                <GroupBtnAuth />
                <nav className="flex flex-col justify-start gap-4 my-10">
                  <NavItem path="/">Home</NavItem>
                  <NavItem path="/strategy-design">Strategy Design</NavItem>
                  <NavItem path="/hands-on-support">Hands On Support</NavItem>
                  <NavItem path="/article">Case</NavItem>
                  <NavItem path="/news">News</NavItem>
                  <NavItem path="/members">Members</NavItem>
                </nav>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
        {/* Nav desktop */}
        <div className="hidden lg:flex gap-4 items-center">
          <nav className="flex justify-start gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center outline-none">
                <span className="text-base font-semibold hover:text-[#73797e]">
                  Services
                </span>
                <ChevronRight size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col gap-3 p-3">
                <NavItem path="/strategy-design">Strategy Design</NavItem>
                <NavItem path="/hands-on-support">Hands On Support</NavItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavItem path="/article">Case</NavItem>
            <NavItem path="/news">News</NavItem>
            <NavItem path="/members">Members</NavItem>
          </nav>
          <GroupBtnAuth />
        </div>
      </div>
    </div>
  );
}
