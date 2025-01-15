import { Flex, Text } from "@chakra-ui/react";
import Dots from "~/assets/images/Dots.png";
import hero from "~/assets/images/Hero.gif";

const Hero = () => {
  return (
    <Flex
      maxH={"500px"}
      w={"100%"}
      bgColor={"#bfc9d7"}
      mt={"-10px"}
      direction={"row"}
      gap={20}
    >
      <Flex maxH={"400px"} w={"220px"} mt={"50px"}>
        <img src={Dots} alt="" />
      </Flex>

      <Flex mt={"90px"} ml={"-20px"} direction={"column"}>
        <Text
          fontSize={"50px"}
          fontWeight={1000}
          color={"#024F83"}
          lineHeight={1.2}
          letterSpacing={2}
        >
          Inventory <br />
          Management <br />
        </Text>

        <Text mt={"30px"} fontSize={"18px"} color={"#024F83"} fontWeight={200}>
          Ensuring there are enough goods or materials to meet demands without
          creating overstock, or excess inventory.
        </Text>
      </Flex>

      <Flex w={"full"}>
        <img src={hero} alt="" />
      </Flex>
    </Flex>
  );
};

export default Hero;
