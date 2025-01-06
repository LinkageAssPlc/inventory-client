import { Flex } from "@chakra-ui/react";
import SignIn from "~/composition/SignIn/SignIn";

const SignInPage = () => {
  return (
    <Flex direction={"row"}>
      <SignIn />
    </Flex>
  );
};

export default SignInPage;
