import { Box, Text, Flex } from "@chakra-ui/react";
import LogoutIcon from "./icons/LogoutIcon";

const LogoutBtn = () => {
  return (
    <>
      <Flex
        w={{ xl: "180px" }}
        h={{ xl: "47px" }}
        mx={"auto"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#c71515"}
        _hover={{
          bgColor: "#E61C1C",
        }}
        borderRadius={"50px"}
        cursor={"pointer"}
        mb={"20px"}
      >
        <Box display={{ xl: "flex" }} cursor={"pointer"}>
          <LogoutIcon />
        </Box>
        <Text
          display={{ base: "none", xl: "flex" }}
          fontSize={"17px"}
          fontWeight={700}
          color={"#fff"}
        >
          Logout
        </Text>
      </Flex>
    </>
  );
};

export default LogoutBtn;
