import { Flex } from "@chakra-ui/react"
import Header from "~/composition/Welcome/Header/Header"
import Hero from "~/composition/Welcome/Hero/Hero"
import Detail from "~/composition/Welcome/Detail/Detail"



const Welcome = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Hero />
      <Detail />
    </Flex>
  )
}

export default Welcome