import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categoriesItems } from "./CategoriesItems";

const AllCategorieManu = () => {
  const { t } = useTranslation();
  

  return (
    <div>
      <Dropdown menu={{ items: categoriesItems }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="font-montserrat font-[600] text-base cursor-pointer">
            <FaBars />
            {t("AllCategory")}
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default AllCategorieManu;
