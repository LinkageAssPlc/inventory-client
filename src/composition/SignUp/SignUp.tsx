import { Flex } from "@chakra-ui/react"
import LeftPane from "./components/LeftPane"
import SignupForm from "./components/SignupForm"



const SignUp = () => {
  return (
    <Flex
        direction={"row"}
    >
        <LeftPane />
        <SignupForm />
    </Flex>
  )
}

export default SignUp