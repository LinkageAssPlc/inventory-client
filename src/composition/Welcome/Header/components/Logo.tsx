import { Flex, Image } from '@chakra-ui/react'
import logo1 from "~/assets/images/logo1.png"

const Logo = () => {
  return (
    <Flex
        p={"1px"}
        ml={"40px"}
    >
        <Image src={logo1} height={"70px"} width={"190px"} />
    </Flex>
  )
}

export default Logo