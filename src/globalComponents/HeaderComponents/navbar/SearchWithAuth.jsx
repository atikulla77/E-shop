import Search from "antd/es/input/Search";
import React from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

const SearchWithAuth = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between w-full gap-x-5">
      <div className=" border-black02 border-[1px] rounded-[10px] flex items-center justify-between py-[14px] px-[18px] w-[320px] h-[56px]">
        <input
          placeholder={t("search_products_...")}
          type="text"
          className="outline-none"
        />
        <CiSearch size={20} />
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <span className="absolute -top-[2px] right-0 w-1.5 h-1.5 bg-orange rounded-full"></span>
          <FaOpencart size={25} />
        </div>
        <div className="">
          <h6 className="font-montserrat text-base text-black01">
            {t("Cart")}
          </h6>
          <span className="text-base font-montserrat font-bold text-black01">
            $ 150,00
          </span>
        </div>
      </div>
      <div className="w-[1px] h-[32px] bg-black02"></div>
      <div className="flex items-center gap-x-5">
        <div className="">
          <LuUserRound size={25} />
        </div>
        <div className="">
          <h6 className="font-montserrat text-base text-black01">
            {t("User")}
          </h6>
          <span className="text-base font-montserrat font-bold text-black01">
            {t("Account")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchWithAuth;
