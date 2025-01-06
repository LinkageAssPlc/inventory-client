import { Flex, Input, Heading, Link, Text, HStack } from "@chakra-ui/react";

const SigninForm = () => {
  return (
    <Flex
      h={"100%"}
      w={"900px"}
      bgColor={"#fff"}
      direction={"column"}
      justifyContent={"center"}
    >
      <Flex
        h={"600px"}
        w={"400px"}
        bgColor={"#fff"}
        mx={"auto"}
        px={"auto"}
        direction={"column"}
      >
        <Heading
          fontSize={"20px"}
          fontWeight={400}
          color={"#000"}
          letterSpacing={2}
          pb={"20px"}
        >
          Sign In
        </Heading>

        <Flex
          w={"400px"}
          h={"50px"}
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
            fontSize={"20px"}
            fontWeight={500}
            color={"#fff"}
            letterSpacing={3}
            textDecoration={"none"}
            _hover={{
              bgColor: "rgb(28,93,145, 100%)",
              textDecoration: "none",
            }}
          >
            SSO
          </Link>
        </Flex>

        <Text color={"#ABABAB"} mx={"auto"} pt={"20px"} fontSize={"17px"}>
          - OR -
        </Text>

        <HStack width={"full"} pb={"30px"}>
          <Input
            placeholder="Email"
            type="email"
            variant="flushed"
            fontSize={"16px"}
            fontWeight={250}
          />
        </HStack>

        <HStack width={"full"} pb={"40px"}>
          <Input
            placeholder="Password"
            type="password"
            variant="flushed"
            fontSize={"16px"}
            fontWeight={250}
          />
        </HStack>

        <Flex
          w={"400px"}
          h={"50px"}
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
            fontSize={"20px"}
            fontWeight={500}
            color={"#fff"}
            letterSpacing={2}
            textDecoration={"none"}
            _hover={{
              bgColor: "rgb(28,93,145, 100%)",
              textDecoration: "none",
            }}
          >
            LOG IN
          </Link>
        </Flex>

        <HStack>
          <Text
            color={"#ABABAB"}
            pt={"20px"}
            fontSize={"16px"}
            fontWeight={250}
          >
            New Here?
          </Text>

          <Link
            href="/signup"
            pt={"20px"}
            color={"#F18200"}
            fontSize={"16px"}
            fontWeight={350}
          >
            Sign Up
          </Link>

          <Link
            color={"#ABABAB"}
            pt={"20px"}
            fontSize={"16px"}
            fontWeight={250}
            pl={"120px"}
          >
            Forgot Password?
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default SigninForm;
