import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import InvoiceIcon from "@/assets/invoice-icon";
import GiftIcon from "@/assets/gift-icon";
import ShipIcon from "@/assets/ship-icon";

const CreateNewDropDown = () => {
  return (
    <DropdownMenuContent className="p-2">
      <DropdownMenuLabel className="text-grey-1 font-normal pb-1 flex items-center gap-x-2">
        <InvoiceIcon /> New invoice
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="text-grey-1 font-normal pb-1  flex items-center gap-x-2">
        <GiftIcon /> New order
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="text-grey-1 font-normal pb-1  flex items-center gap-x-2">
        <ShipIcon /> New shipment
      </DropdownMenuLabel>
    </DropdownMenuContent>
  );
};

export default CreateNewDropDown;
