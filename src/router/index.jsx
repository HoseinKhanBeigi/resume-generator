import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/front";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
