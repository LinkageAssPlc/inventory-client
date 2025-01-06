import { Flex, Image, Link } from "@chakra-ui/react";
import logo2 from "~/assets/images/logo2.png";
import Blend from "~/assets/images/Blend.png";

const LeftPane = () => {
  return (
    <Flex
      h={"790px"}
      w={"520px"}
      bgColor={"#024F83"}
      justifyContent={"center"}
      direction={"column"}
      hideBelow={"md"}
    >
      <Link href="/">
        <Image src={logo2} h={"140px"} w={"350px"} mt={"90px"} mx={"auto"} />
      </Link>

      <Flex h={"600px"} w={"1200px"} mt={"-10px"}>
        <Image src={Blend} />
      </Flex>
    </Flex>
  );
};

export default LeftPane;
