import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
