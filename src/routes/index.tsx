import { createBrowserRouter } from "react-router-dom";
import Routes from "./baseRoutes";
import Welcome from "~/pages/Welcome";
import SigUpPage from "~/pages/SignUp";
import SignInPage from "~/pages/SignIn";
import Dashboard from "~/pages/Dashboard";

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
  {
    path: Routes.dashboard,
    element: <Dashboard />,
  },
]);

export default router;
