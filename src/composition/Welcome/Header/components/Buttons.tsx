import { Flex, Link } from "@chakra-ui/react";

const Buttons = () => {
  return (
    <Flex pt={"15px"} mr={"70px"}>
      <Flex
        w={{ md: "120px" }}
        h={{ md: "40px" }}
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Link fontSize={"15px"} href="/signup">
          Sign Up
        </Link>
      </Flex>

      <Flex
        w={{ md: "120px" }}
        h={{ md: "40px" }}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#024F83"}
        _hover={{
          bgColor: "rgb(28,93,145, 100%)",
        }}
        borderRadius={"50px"}
        cursor={"pointer"}
      >
        <Link
          href="/signin"
          fontSize={"15px"}
          color={"#fff"}
          _hover={{
            textDecoration: "none",
          }}
        >
          Sign In
        </Link>
      </Flex>
    </Flex>
  );
};

export default Buttons;
