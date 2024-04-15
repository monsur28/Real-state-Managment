import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
