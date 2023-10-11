import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Chart from "../Chart/Chart";
import Form from "../Form/Form";
import AvgGrade from "../Chart/OtherComparism/avgGrade";
import PassingRate from "../Chart/OtherComparism/PassingRate";
import AttendanceRate from "../Chart/OtherComparism/AttendanceRate";
import FailureRate from "../Chart/OtherComparism/FailureRate";
import GraduationRate from "../Chart/OtherComparism/graduationRate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/chart",
        element: <Chart />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/avgGrade",
        element: <AvgGrade />,
      },
      {
        path: "/passingRate",
        element: <PassingRate />,
      },
      {
        path: "/attendanceRate",
        element: <AttendanceRate />,
      },
      {
        path: "/failureRate",
        element: <FailureRate />,
      },
      {
        path: "/graduationRate",
        element: <GraduationRate />,
      },
    ],
  },
]);

export default router;
