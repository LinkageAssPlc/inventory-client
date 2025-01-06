import { Flex } from "@chakra-ui/react";
import LeftPane from "./components/LeftPane";
import SigninForm from "./components/SigninForm";

const SignIn = () => {
  return (
    <Flex direction={"row"}>
      <LeftPane />
      <SigninForm />
    </Flex>
  );
};

export default SignIn;
