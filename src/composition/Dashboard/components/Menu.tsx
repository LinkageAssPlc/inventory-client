import { Flex, Text } from "@chakra-ui/react";
import { type IconProp } from "./icons/icon";

type MenuItem = {
  active: boolean;
  Icon: ({ active }: IconProp) => JSX.Element;
  onClick: () => void;
  name: string;
};

const Menu = ({ name, active, Icon, onClick }: MenuItem) => {
  return (
    <Flex
      maxWidth={"fit-content"}
      h={"45px"}
      gap={"20px"}
      // border={"1px solid red"}
      alignItems={"center"}
      bgColor={{ md: active ? "#024F83" : "#fff" }}
      cursor={"pointer"}
      _hover={{
        textDecoration: "none",
      }}
      px={"25px"}
      borderRadius={"50px"}
      onClick={onClick}
    >
      <Icon active={active} />
      <Text
        display={{ base: "none", xl: "flex" }}
        fontSize={{ md: "13px" }}
        fontWeight={{ md: active ? 800 : 400 }}
        color={{ md: active ? "#fff" : "#024F83" }}
      >
        {name}
      </Text>
    </Flex>
  );
};

export default Menu;
