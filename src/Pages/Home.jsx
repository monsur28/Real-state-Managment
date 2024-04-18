import Banner from "../Layout/Banner";
import "animate.css";
import EstateCards from "../Layout/EstateCards";
const Home = () => {
  return (
    <div className="animate__zoomIn ">
      <Banner />
      <EstateCards />
    </div>
  );
};

export default Home;
