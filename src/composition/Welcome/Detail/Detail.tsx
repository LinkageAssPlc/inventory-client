import { Flex } from "@chakra-ui/react"
import Picture from "./components/Picture"
import Narration from "./components/Narration"

const Detail = () => {
  return (
    <Flex
        h={"700px"}
        w={"100%"}
        bgColor={"#ffffff"}
        direction={"row"}
        justify={"center"}
    >
        <Picture />
        <Narration />
    </Flex>
  )
}

export default Detail