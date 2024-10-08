import LockIcon from "@/assets/lock-icon";
import React from "react";

const LockedAccountNotification = () => {
  return (
    <div className="bg-[#EEF4FF] md:hidden">
      <div className="wrapper text-center">
        <p className="flex items-center justify-center text-grey-4 text-justify gap-x-2 font-light">
          <LockIcon /> <span>Your account isn’t fully activated.</span>
        </p>
        <p className="flex items-center whitespace-nowrap justify-center text-grey-4 text-justify gap-x-2 font-light mt-1">
          <span className="text-primary font-medium">Complete registration</span> to access all
          benefits.
        </p>
      </div>
    </div>
  );
};

export default LockedAccountNotification;
