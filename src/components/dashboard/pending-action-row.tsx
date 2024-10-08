import { IPendingActionsProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";

const PendingActionRow = ({
  company,
  type,
  amount,
  date,
  payment,
  shipmentStatus,
  shipment,
  shipmentTicket,
  offer,
  quote,
}: IPendingActionsProps) => {
  return (
    <div className="w-full mb-3">
      <div className={`flex items-center gap-x-2`}>
        {date && (
          <p className="text-grey-9 text-xs md:text-sm font-normal inline-block whitespace-nowrap">
            {date}
          </p>
        )}{" "}
        <div className="w-full border-t border-grey-8"></div>
      </div>

      <div
        className={`flex items-start md:items-center flex-wrap md:flex-nowrap flex-col md:flex-row justify-between ${
          date ? "mt-2" : "mt-3"
        }`}
      >
        <div className="flex items-start flex-col justify-between mt-1 gap-y-2">
          <p className="font-normal text-sm md:text-base text-grey-2   ">
            {offer && (
              <span>
                {offer} <span className="font-medium m">{amount}</span>
              </span>
            )}
            {quote && (
              <span>
                {quote} <span className="font-medium">{amount}</span>
              </span>
            )}
            {payment && (
              <span>
                Your repayment of <span className="font-medium">{amount}</span> is due
              </span>
            )}
            {shipment && (
              <span>
                Your shipment <span className="font-medium">{shipmentTicket}</span> is pending{" "}
                <span className="font-medium">{shipmentStatus}</span>
              </span>
            )}
          </p>
          <p className="flex items-center text-grey-10 font-light text-xs md:text-sm">
            <span className="">{type}</span>
            <Dot size={12} />
            <span>{company}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant={"link"}
            className={cn("font-normal text-xs md:text-sm text-primary hover:bg-none md:px-3 px-0")}
          >
            {offer && "Review Offer"}
            {quote && "Review quote"}
            {shipment && "Review shipment"}
            {payment && "Make payment"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PendingActionRow;
