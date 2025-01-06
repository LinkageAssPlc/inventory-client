import { createBrowserRouter } from "react-router-dom";
import Routes from "./baseRoutes";
import Welcome from "../pages/Welcome";
import SigUpPage from "~/pages/SignUp";
import SignInPage from "~/pages/SignIn";

const router = createBrowserRouter([
  {
    path: Routes.welcome,
    element: <Welcome />,
  },
  {
    path: Routes.signup,
    element: <SigUpPage />,
  },
  {
    path: Routes.signin,
    element: <SignInPage />,
  },
]);

export default router;
