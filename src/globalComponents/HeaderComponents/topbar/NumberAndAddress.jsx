import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";


const NumberAndAddress = () => {
  return (
    <div className="flex items-center w-full gap-x-5">
      <div className="flex items-center gap-x-2">
        <div className="">
          <IoLocationOutline />
        </div>
        <div className="">
          <p className="font-montserrat text-sm font-normal text-black01">123 Main Street, Anytown USA</p>
        </div>
      </div>
      <div className="w-[1px] h-[32px] bg-black02"></div>
      <div className="flex items-center gap-x-2">
        <div className="">
          <IoCallOutline />
        </div>
        <div className="">
          <p className="">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default NumberAndAddress;
