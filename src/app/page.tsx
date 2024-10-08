import ClosedEyeIcon from "@/assets/closed-eye-icon";
import SendIcon from "@/assets/send-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DashboardCardList from "@/components/dashboard/dashboard-card-list";
import { Plus } from "lucide-react";
import CustomSelect from "@/components/dashboard/custom-select";
import {
  CURRENCY_OPTIONS,
  PENDING_ACTIONS,
  PENDING_ACTIONS_OPTIONS,
  PRINT_OPTIONS,
  RECENT_TRXN,
} from "@/lib/constants";
import RecentTrxnRow from "@/components/dashboard/recent-trxn-row";
import React from "react";
import PendingActionRow from "@/components/dashboard/pending-action-row";
import LockedAccountNotification from "@/components/dashboard/locked-account-notification";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CreateNewDropDown from "@/components/dashboard/create-new-dropdown";

export default function Home() {
  return (
    <div>
      <LockedAccountNotification />
      <main className="my-5 wrapper">
        <header className="mt-3 md:my-2 flex items-end justify-between">
          <div className="flex flex-col">
            <h3 className="flex items-center text-left gap-x-2 text-grey-1 font-medium text-xl">
              <span>Hello Bob, </span>{" "}
              <Button variant={"ghost"} className="p-0 hover:bg-none">
                <ClosedEyeIcon />
              </Button>
            </h3>
            <p className="text-grey-4 font-normal text-base flex items-center gap-x-2">
              Overview of your activity in{" "}
              <CustomSelect
                classNames="gap-x-1 text-grey-1 bg-grey-7"
                placeholder="NGN"
                options={CURRENCY_OPTIONS}
              />
            </p>
          </div>
          <div className="hidden md:flex items-center gap-x-4">
            <Button
              variant={"secondary"}
              className="flex items-center gap-x-2  text-center text-base"
            >
              <SendIcon />
              <span>Send money</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-x-2 text-center font-light text-base">
                  <Plus size={15} />
                  <span>Create new</span>
                </Button>
              </DropdownMenuTrigger>
              <CreateNewDropDown />
            </DropdownMenu>
          </div>
        </header>

        <DashboardCardList />

        <section className="md:hidden flex items-center justify-between gap-x-5 mt-7 mb-10">
          <Button
            variant={"secondary"}
            className="flex items-center gap-x-2  text-center text-base w-full"
          >
            <SendIcon />
            <span>Send money</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-x-2 text-center font-light text-base  w-full">
                <Plus size={13} />
                <span>Create new</span>
              </Button>
            </DropdownMenuTrigger>
            <CreateNewDropDown />
          </DropdownMenu>
        </section>

        <section className="flex items-start flex-wrap md:flex-nowrap justify-between gap-5">
          <Card className="w-full md:w-1/2 border-[#F4F0FF] border pt-4 pb-6 px-4 flex flex-col gap-y-3 items-start rounded-lg  shadow-none">
            <div className="p-0 flex items-center justify-between w-full flex-row">
              <p className="text-sm md:text-base text-grey-4 font-normal">Recent transactions</p>

              <CustomSelect
                options={PRINT_OPTIONS}
                placeholder="Print statement"
                label="Print statement"
              />
            </div>
            <div className="w-full">
              {RECENT_TRXN.map(({ more, ...rest }, index) => {
                return (
                  <React.Fragment key={index}>
                    <RecentTrxnRow {...rest} />
                    {more?.map((item, index) => (
                      <RecentTrxnRow {...item} key={`${index}-${item.to || item?.from}`} />
                    ))}
                  </React.Fragment>
                );
              })}
            </div>

            <p className="text-primary text-center font-normal text-xs md:text-sm mt-3 w-full cursor-pointer">
              View full transaction history
            </p>
          </Card>
          <Card className="w-full md:w-1/2 border-[#F4F0FF] border pt-4 pb-6 px-4 flex flex-col gap-y-3 items-start rounded-lg shadow-none">
            <div className="p-0 flex items-center justify-between w-full flex-row">
              <p className="text-sm md:text-base text-grey-4 font-normal flex items-center gap-x-2">
                Pending actions{" "}
                <span className="bg-grey-7 h-5 w-5 rounded-full text-grey-1 grid justify-center items-center text-xs">
                  4
                </span>
              </p>

              <div className="flex items-center gap-x-2">
                <span className="font-light text-sm text-grey-4">Filter</span>
                <CustomSelect options={PENDING_ACTIONS_OPTIONS} placeholder="All" label="All" />
              </div>
            </div>

            <div className="w-full">
              {PENDING_ACTIONS.map(({ more, ...rest }, index) => {
                return (
                  <React.Fragment key={index}>
                    <PendingActionRow {...rest} />
                    {more?.map((item, index) => (
                      <PendingActionRow {...item} key={`${index}-${item.date}`} />
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
