import { Flex, Image } from "@chakra-ui/react"
import Woman from "~/assets/images/Woman .jpg"



const Picture = () => {
  return (
    <Flex
        mt={"100px"}
        height={"500px"}
        width={"809px"}
    >
        <Image 
        src={Woman}
        borderRadius={"10px"}
        />

    </Flex>
  )
}

export default Picture