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
            <div className="hero-overlay bg-opacity-10 rounded-2xl"></div>
            <div className="hero-content text-center text-white">
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
            <div className="hero-overlay bg-opacity-50 rounded-2xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Urban Retreat: Modern Apartments for Elevated Living
                </h1>
                <p className="mb-5">
                  Welcome to a haven of contemporary sophistication and urban
                  convenience. These stylish apartments redefine city living,
                  offering a fusion of sleek design, premium amenities, and
                  unparalleled comfort.
                </p>
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
                <h1 className="mb-5 text-5xl font-bold">
                  Seaside Serenity: Your Ultimate Vacation Escape Awaits!
                </h1>
                <p className="mb-5">
                  Immerse yourself in the ultimate coastal getaway with our
                  stunning vacation rental. Perched on the shores of pristine
                  beaches, this idyllic retreat offers unparalleled views and
                  luxurious amenities that promise to make your stay
                  unforgettable.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
