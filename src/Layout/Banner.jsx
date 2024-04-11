import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/singlehome.jpg";
import img2 from "../assets/appartments.jpg";
import img3 from "../assets/townhouse.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#000000",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className="hero min-h-[500px] rounded-2xl"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Charming Haven: Your Dream Single Home Awaits!
                </h1>
                <p className="mb-5">
                  Step into a world of timeless elegance and modern comfort with
                  this exquisite single home. Nestled in a tranquil
                  neighborhood, this gem offers the perfect blend of classic
                  charm and contemporary luxury.
                </p>
                <button className="btn btn-primary">
                  Explore Single Homes
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px] rounded-2xl"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px] rounded-2xl"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
