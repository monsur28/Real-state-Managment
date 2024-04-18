import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EstateCardDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id === id);

  const handleBuyNowClick = () => {
    let storedEstates = JSON.parse(localStorage.getItem("estates") || "[]");
    const isBooked = storedEstates.find((b) => b.id === estate.id);

    if (isBooked) {
      MySwal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This Propety is already Booked.",
      });
    } else {
      let storedSaveList = JSON.parse(localStorage.getItem("savelist") || "[]");
      const isSaveList = storedSaveList.find((b) => b.id === estate.id);

      if (isSaveList) {
        const updatedSaveList = storedSaveList.filter(
          (b) => b.id !== estate.id
        );
        localStorage.setItem("savelist", JSON.stringify(updatedSaveList));
      }

      storedEstates.push(estate);
      localStorage.setItem("estates", JSON.stringify(storedEstates));
      MySwal.fire({
        title: "Good job!",
        text: "Property Booked Succesfully",
        icon: "success",
      });
    }
  };

  const {
    image,
    estate_title,
    facilities,
    deatailDescription,
    price,
    location,
    status,
    category,
    area,
  } = estate;
  return (
    <section className="p-6 mt-3 text-gray-100">
      <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-md xl:col-span-2 bg-[#1313130d] rounded-r-2xl"
        />
        {status === "Sale" ? (
          <div className="absolute bg-green-400 px-5 py-2 rounded-full top-[135px] ml-[400px]">
            <h2 className="text-lg ">{status}</h2>
          </div>
        ) : (
          <div className="absolute bg-cyan-400 px-5 py-2 rounded-full top-[135px] ml-[400px]">
            <h2 className="text-lg ">{status}</h2>
          </div>
        )}
        <div className="w-full text-left px-6 sm:px-12 md:px-16 xl:col-span-3 text-black">
          <h2 className="text-lg">Category: {category}</h2>
          <hr className="my-6" />
          <h1 className="text-5xl font-extrabol">{estate_title}</h1>
          <h3 className="my-8 work text-justify">{deatailDescription}</h3>
          <hr className="my-6" />
          <div className="flex justify-between">
            <div className="flex items-center text-lg gap-2">
              <FaDollarSign />
              {price}
            </div>
            <div className="flex items-center text-lg gap-2">
              <MdCompareArrows />
              {area}
            </div>
            <div className="flex items-center text-lg gap-2">
              <CiLocationOn />
              {location}
            </div>
          </div>
          <hr className="my-6" />
          <h5 className="mt-2 flex items-center">
            <span className="font-bold mr-3 text-lg">Facilities:</span>
            <span className="flex gap-2">
              {facilities.map((item) => (
                <>
                  <li className="text-lg">{item}</li>
                </>
              ))}
            </span>
          </h5>
          <hr className="my-6" />
          <div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={handleBuyNowClick}
                className="btn w-full py-[18px] px-7 bg-white border border-[#1313134d] font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateCardDetails;
