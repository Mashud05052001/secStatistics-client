import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Chart from "../Chart/Chart";
import Form from "../Form/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Chart/>,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
    ],
  },
]);

export default router;
