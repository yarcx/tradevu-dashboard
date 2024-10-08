import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import CopyIcon from "@/assets/copy-icon";
import ArrowDown from "@/assets/arrow-down";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";

const DashboardCardList = () => {
  return (
    <section className="flex items-center justify-between gap-x-5 my-5 md:my-7 overflow-x-auto no-scrollbar scroll-smooth snap-center snap-always snap-mandatory">
      <Card className="min-w-[330px] border-[#F4F0FF] border pt-4 pb-6 px-3 flex flex-col gap-y-3 items-start">
        <CardHeader className="p-0">
          <p className="text-sm text-grey-4 font-normal">Your balance</p>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-grey-1">
            <span className="text-grey-4 text-base md:text-xl">₦</span>{" "}
            <span className="text-grey-1 text-2xl md:text-3xl">4,350,000</span>{" "}
            <span className="text-grey-4 text-base md:text-xl">.20</span>
          </p>{" "}
        </CardContent>
        <CardFooter className="p-0 flex items-center gap-x-1">
          <p className="text-sm text-grey-1 font-normal ">0912873465</p>{" "}
          <Button variant={"ghost"} className="p-0 h-0">
            <CopyIcon />
          </Button>{" "}
          <span>
            <Dot size={13} />
          </span>
          <p className="text-xs font-normal text-grey-4">Sudo Bank</p>
        </CardFooter>
      </Card>
      <Card className="min-w-[330px] border-[#F4F0FF] border pt-4 pb-6 px-3 flex flex-col gap-y-3 items-start">
        <CardHeader className="p-0">
          <p className="text-sm text-grey-4 font-normal">Active orders</p>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-grey-1">
            <span className="text-grey-1 text-2xl md:text-3xl">7</span>{" "}
          </p>{" "}
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-between gap-x-1 w-full">
          <div className="flex items-center gap-x-1">
            <p className="text-sm text-grey-1 font-normal ">₦ 0.00</p>{" "}
            <p className="text-xs font-normal text-grey-4">overdue</p>
          </div>
          <div className="flex items-center gap-x-[6px]">
            {" "}
            <span className="h-2 w-2 rounded-full bg-purple-3"></span>
            <span className="h-2 w-2 rounded-full bg-grey-5"></span>
            <span className="h-2 w-2 rounded-full bg-grey-5"></span>
          </div>
        </CardFooter>
      </Card>
      <Card className="min-w-[330px] border-[#F4F0FF] border pt-4 pb-6 px-3 flex flex-col gap-y-3 items-start">
        <CardHeader className="p-0">
          <p className="text-sm text-grey-4 font-normal">Active loans</p>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-grey-1">
            <span className="text-grey-1 text-2xl md:text-3xl">10</span>{" "}
          </p>{" "}
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-between gap-x-1 w-full">
          <div className="flex items-center gap-x-1">
            <p className="text-sm text-grey-1 font-normal ">2</p>{" "}
            <p className="text-xs font-normal text-grey-4">pending payment</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="min-w-[330px] border-[#F4F0FF] border pt-4 pb-6 px-3 flex flex-col gap-y-3 items-start">
        <CardHeader className="p-0 flex items-center justify-between flex-row w-full">
          <p className="text-sm text-grey-4 font-normal">Unpaid invoices</p>

          <Button variant={"ghost"} size="sm" className="h-0 flex  items-center gap-x-1 pr-0">
            <span>All time</span> <ArrowDown />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-grey-1">
            <span className="text-grey-1 text-2xl md:text-3xl">2</span>{" "}
          </p>{" "}
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-between gap-x-1 w-full">
          <div className="flex items-center gap-x-1">
            <p className="text-sm text-grey-1 font-normal ">₦ 720,000.00</p>{" "}
            <p className="text-xs font-normal text-grey-4">overdue</p>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default DashboardCardList;
