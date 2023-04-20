import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <PrivetRoute>
            <About />
          </PrivetRoute>
        ),
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;