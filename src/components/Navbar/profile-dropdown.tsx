"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ArrowDown from "@/assets/arrow-down";
import UserIcon from "@/assets/user-icon";
import Logout from "@/assets/logout-icon";
import CaretDownIcon from "@/assets/carret-down-icon";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const AccountList = ({ isLoggedIn = false }: { isLoggedIn?: boolean }) => {
  return (
    <div className="flex items-center p-1 transition-all bg-white rounded-md cursor-pointer gap-x-4 hover:bg-neutral-100">
      <div className="border-[0.4px] rounded-full h-6 w-6 md:h-9 md:w-9 border-primary"></div>
      <div className="flex flex-col items-start">
        <p className="md:text-sm text-xs font-normal">Vance Refrigeration</p>
        {isLoggedIn && <span className="text-xs text-success-1">Logged in</span>}
      </div>
    </div>
  );
};

const ProfileDropDown = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer gap-x-2">
          <div className="border-[0.4px] rounded-full h-6 w-6 md:h-7 md:w-7 border-primary"></div>
          <p className="text-sm md:text-base font-normal">Vance Refrigeration</p>
          <ArrowDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-3 py-2 border-[.5px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center justify-between px-3 py-2 text-sm font-normal transition-all ease-in-out rounded-md cursor-pointer bg-grey-3 gap-x-3 hover:opacity-80 text-grey-2">
            <div>
              <p className="text-sm md:text-base">Switch account</p>
              <p className="text-xs md:text-sm text-grey-4">Access your other businesses</p>
            </div>
            <CaretDownIcon />
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="px-3 py-2 rounded-md">
              <DropdownMenuItem className="p-0 ">
                <AccountList isLoggedIn={true} />
              </DropdownMenuItem>

              <DropdownMenuItem className="w-full p-0 mt-2">
                <Button variant={"outline"} className="flex text-sm items-center w-full gap-x-2">
                  <Plus className="md:w-5 md:h-5 w-4 h-4" /> <span>Add business</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuLabel className="flex items-center px-0 py-3 text-xs md:text-sm font-normal transition-all ease-in-out cursor-pointer gap-x-3 hover:bg-neutral-100 text-grey-2">
          <UserIcon /> <span>Manage account</span>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="flex items-center px-0 py-3 text-xs md:text-sm font-normal transition-all ease-in-out border-t cursor-pointer hover:bg-neutral-100 gap-x-3 text-grey-2">
          <Logout /> <span>Logout</span>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropDown;
