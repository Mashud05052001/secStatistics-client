import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col md:w-[80%] mx-auto">
      <Header />
      <Outlet />
      <div className="mt-auto">
        <Footer/>
      </div>
    </div>
  );
};

export default Root;
