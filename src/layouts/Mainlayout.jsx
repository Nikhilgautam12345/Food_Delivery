import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Mainlayout = () => {


  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
