import { Flex } from "@chakra-ui/react"
import Logo from "./components/Logo"
import Buttons from "./components/Buttons"




const Header = () => {
  return (
    <Flex
      w={"100%"}
      h={"80px"}
      bgColor={"#ffffff"}
      justify={"space-between"}
    >
 
      <Logo />
      <Buttons />
    </Flex>
  )
}

export default Header