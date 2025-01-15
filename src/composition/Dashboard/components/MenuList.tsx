import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import Menu from "./Menu";
import AddStockIcon from "./icons/AddStockIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import BrandIcon from "./icons/BrandIcon";
import CategoryIcon from "./icons/CategoryIcon";
import ProductIcon from "./icons/ProductIcon";
import ReportIcon from "./icons/ReportIcon";
import ViewOrdersIcon from "./icons/ViewOrdersIcon";

const MenuList = () => {
  const [menuList, setMenuList] = useState([
    { icon: AnalyticsIcon, name: "Analytics", active: true },
    { icon: ProductIcon, name: "Product", active: false },
    { icon: BrandIcon, name: "Brand", active: false },
    { icon: CategoryIcon, name: "Category", active: false },
    { icon: ReportIcon, name: "Reports", active: false },
    { icon: AddStockIcon, name: "Add Stock", active: false },
    { icon: ViewOrdersIcon, name: "View Orders", active: false },
  ]);
  return (
    <Flex flexDirection={"column"} mx={"auto"} gap={"10px"}>
      {menuList.map((menu, i) => (
        <Menu
          key={i}
          name={menu.name}
          active={menu.active}
          Icon={menu.icon}
          onClick={() => {
            const name = menu.name;
            setMenuList(
              menuList.map((menuItem) => ({
                ...menuItem,
                active: menuItem.name === name,
              }))
            );
          }}
        />
      ))}
    </Flex>
  );
};

export default MenuList;
