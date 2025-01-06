import { Flex, Text } from "@chakra-ui/react"

const Narration = () => {
  return (
    <Flex
        h={"370px"}
        w={"350px"}
        bgColor={"#024F83"}
        mt={"170px"}
        ml={"-230px"}
        borderRadius={"10px"}
        direction={"column"}
    >
        
        <Text
            fontSize={"25px"}
            fontWeight={900}
            color={"#ffffff"}
            lineHeight={1.2}
            letterSpacing={1}
            textAlign={"center"}
            pt={"50px"}
        >
            Inventory Management
        </Text>

        <Text
            fontSize={"14px"}
            color={"#ffffff"}
            lineHeight={1.2}
            letterSpacing={1}
            pt={"30px"}
            pl={"50px"}
            pr={"50px"}
            textAlign={"left"}
        >
            Inventory Management System (IMS) application is software that helps businesses efficiently control and track their inventory. <br /><br />

            It includes features like real-time tracking, order management, supplier collaboration, user access controls, and reporting tools. The goal is to optimize stock levels, reduce costs, and enhance overall operational efficiency.
        </Text>

    </Flex>
  )
}

export default Narration