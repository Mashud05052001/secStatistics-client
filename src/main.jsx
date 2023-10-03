import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Components/Router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    <ToastContainer/>
    <ReactNotifications/>
  </HelmetProvider>
);
