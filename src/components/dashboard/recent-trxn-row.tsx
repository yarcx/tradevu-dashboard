import { IRecentTrxnProps, ITrxnStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import React from "react";

const RecentTrxnRow = ({
  date,
  to,
  sentAmount,
  pendingAmount,
  time,
  status,
  from,
}: IRecentTrxnProps) => {
  return (
    <div className="w-full mb-2">
      <div className="flex items-center gap-x-2">
        {date && (
          <p className="text-grey-9 text-xs md:text-sm font-normal inline-block whitespace-nowrap">
            {date}
          </p>
        )}{" "}
        <div className="w-full border-t border-grey-8"></div>
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between mt-1 ">
          <p className="font-normal text-sm md:text-base text-grey-2   ">
            {to ? "To" : "From"} {to || from}
          </p>
          <p
            className={cn("font-normal text-sm md:text-base text-grey-1", {
              "text-textColor-3": ITrxnStatus[status as ITrxnStatus] === "Completed",
              "text-textColor-2": status === undefined,
            })}
          >
            {sentAmount}
          </p>
        </div>
        <div className="flex items-center font-light text-xs md:text-sm justify-between my-1">
          <p className="flex items-center">
            <span className="text-grey-10">{time}</span>
            {ITrxnStatus[status as ITrxnStatus] && <Dot size={10} />}{" "}
            <span
              className={cn({
                "text-textColor-1": ITrxnStatus[status as ITrxnStatus] === "Pending",
                "text-textColor-2": ITrxnStatus[status as ITrxnStatus] === "Completed",
                "text-textColor-3": ITrxnStatus[status as ITrxnStatus] === "Failed",
              })}
            >
              {ITrxnStatus[status as ITrxnStatus]}
            </span>
          </p>
          <p className="text-grey-4">{pendingAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentTrxnRow;
