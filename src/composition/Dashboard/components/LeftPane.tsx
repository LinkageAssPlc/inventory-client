import { Flex, Link, Image, Spacer } from "@chakra-ui/react";
import logo1 from "~/assets/images/logo1.png";
import MenuList from "./MenuList";
import LogoutBtn from "./LogoutBtn";

const LeftPane = () => {
  return (
    <Flex
      h={"775px"}
      w={"257px"}
      bgColor={"#fff"}
      direction={"column"}
      hideBelow={"md"}
    >
      <Link href="/">
        <Image src={logo1} h={90} w={200} pt={"13px"} mx={"auto"} mb={"30px"} />
      </Link>

      <MenuList />
      <Spacer />
      <LogoutBtn />
    </Flex>
  );
};

export default LeftPane;
