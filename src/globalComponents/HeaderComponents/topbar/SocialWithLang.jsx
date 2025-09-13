import { Select } from "antd";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import i18n from "../../../service/i18n";

const SocialWithLang = () => {
  const currencyOption = [
    { value: "USD", label: "USD" },
    { value: "TAKA", label: "TAKA" },
  ];
  const countriesOptionsWithFlag = [
    {
      value: "us",
      language: "en",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/us.svg"
            alt="flag"
            className="w-[20px] h-[20px]"
          />
          <span>English</span>
        </div>
      ),
    },
    {
      value: "bd",
      language: "bd",
      label: (
        <div className="flex items-center gap-x-2">
          <img
            src="https://flagcdn.com/bd.svg"
            alt="flag"
            className="w-[20px] h-[20px]"
          />
          <span>Bangla</span>
        </div>
      ),
    },
  ];

  const handleLanguageChange = (value) => {
    const findLanguage = countriesOptionsWithFlag.find(
      (language) => language.value === value
    );
    if (findLanguage) {
        i18n.changeLanguage(findLanguage.language || 'en')
    }
  };
  
  return (
    <div className="flex items-center w-full gap-x-5 justify-end">
      <Select
        defaultValue={currencyOption[0].value}
        style={{ width: 80 }}
        onChange={() => {}}
        options={currencyOption}
        className="custom-select"
      />
      <div className="w-[1px] h-[32px] bg-black02"></div>
      <Select
        defaultValue={countriesOptionsWithFlag[0].value}
        style={{ width: 120 }}
        onChange={handleLanguageChange}
        options={countriesOptionsWithFlag}
        className="custom-select"
      />
      <div className="w-[1px] h-[32px] bg-black02"></div>
      <div className="flex items-center gap-x-4">
        <Link to="facebook.com">
          <FaFacebookF color="#303030" />
        </Link>
        <Link to="facebook.com">
          <FaTwitter color="#303030" />
        </Link>
        <Link to="facebook.com">
          <FaInstagram color="#303030" />
        </Link>
      </div>
    </div>
  );
};

export default SocialWithLang;
