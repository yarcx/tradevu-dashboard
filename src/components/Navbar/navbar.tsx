import ActiveNotificationIcon from "@/assets/active-notificationIcon";
import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import ProfileDropDown from "./profile-dropdown";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MenuIcon from "@/assets/menu-icon";
import HomeIcon from "@/assets/home-icon";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Close } from "@radix-ui/react-dialog";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import NotificationContainer from "../dashboard/notification-container";

const MobileNavBar = () => {
  return (
    <SheetContent className="w-full block lg:hidden">
      <SheetHeader>
        <div className="flex items-center justify-start gap-x-1">
          <Logo />
          <h5 className="text-xl font-medium">Tradevu</h5>
        </div>
        <Close />
      </SheetHeader>
      <div className="md:hidden flex flex-col items-center justify-end gap-y-5 md:gap-x-2 lg:gap-x-5 mt-10">
        {NAV_LINKS?.map(({ link, active }, index) => (
          <Link
            href={"#"}
            key={`${link}-${index}`}
            className={cn(
              "flex items-center text-base my-2 w-full justify-end",
              active ? "font-medium gap-x-1 text-primary" : "font-light text-grey-1"
            )}
          >
            {active && <HomeIcon />}
            <span>{link}</span>
          </Link>
        ))}
      </div>
      <div className="md:hidden flex justify-end mt-5">
        <ProfileDropDown />
      </div>
    </SheetContent>
  );
};

const Navbar = () => {
  return (
    <Sheet>
      <nav className="wrapper  flex items-center justify-between border-b border-b-[#EAECF0] bg-white">
        <div className="flex items-center justify-center gap-x-1">
          <Logo />
          <h5 className="text-xl font-medium">Tradevu</h5>
        </div>

        <div className="hidden md:flex items-center justify-center md:gap-x-2 lg:gap-x-5">
          {NAV_LINKS?.map(({ link, active }, index) => (
            <Link
              href={"#"}
              key={`${link}-${index}`}
              className={cn(
                "flex items-center md:mx-1 lg:mx-3 text-base",
                active ? "font-medium gap-x-1 text-primary" : "font-light text-grey-1"
              )}
            >
              {active && <HomeIcon />}
              <span>{link}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-3 md:gap-x-2 lg:gap-x-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">
                <ActiveNotificationIcon />
              </span>
            </DropdownMenuTrigger>
            <NotificationContainer />
          </DropdownMenu>
          <div className="hidden md:flex">
            <ProfileDropDown />
          </div>
          <SheetTrigger className="md:hidden p-0 flex items-center justify-center">
            <MenuIcon />
          </SheetTrigger>
        </div>
      </nav>
      <MobileNavBar />
    </Sheet>
  );
};

export default Navbar;
