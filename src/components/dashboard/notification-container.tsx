"use client";
import React, { useState } from "react";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { Switch } from "../ui/switch";
import { NOTIFICATION_LIST } from "@/lib/constants";
import { INotify } from "@/lib/types";
import { cn } from "@/lib/utils";

const NotificationItem = ({ msg, active, date }: INotify) => {
  return (
    <div className="flex items-start justify-between border-b py-2">
      <div className="flex items-center h-full ml-3 ">
        {active && <div className="bg-textColor-2 h-2 w-2 rounded-full mt-2"></div>}
      </div>
      <div className="flex flex-col items-start  w-11/12">
        <p
          className={cn(
            "font-normal text-sm md:text-base ",
            active ? "text-grey-2" : "text-grey-4"
          )}
        >
          {msg}
        </p>
        <p className="text-grey-9 text-xs md:text-sm font-normal inline-block whitespace-nowrap mt-2">
          {date}
        </p>
      </div>
    </div>
  );
};

const NotificationContainer = () => {
  const [status, setStatus] = useState(false);
  return (
    <DropdownMenuContent className="w-[280px] md:w-[360px] p-0 border-[#F4F0FF]">
      <div className="border-b flex items-center justify-between p-2 mb-3">
        <h4>Notifications</h4>
        <div className="flex items-center gap-x-2">
          <p className="text-xs text-muted-foreground">Unread only</p>
          <Switch checked={status} onCheckedChange={() => setStatus((e) => !e)} />
        </div>
      </div>

      <div className="p-4">
        {NOTIFICATION_LIST.filter((item) => (status ? item.active : item)).map((item, index) => {
          return <NotificationItem key={index + item.date} {...item} />;
        })}
      </div>
    </DropdownMenuContent>
  );
};

export default NotificationContainer;
