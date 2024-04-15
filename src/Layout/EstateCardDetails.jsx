import { useLoaderData, useParams } from "react-router-dom";

const EstateCardDetails = () => {
  const lists = useLoaderData();
  const { id } = useParams();
  const list = lists.find((list) => list.id === id);
  const { image, estate_title, facilities } = list;
  return (
    <section className="p-6 mt-3 text-gray-100">
      <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-md xl:col-span-2 bg-[#1313130d] rounded-r-2xl"
        />
        <div className="w-full text-left px-6 sm:px-12 md:px-16 xl:col-span-3 text-black">
          <h1 className="text-5xl font-extrabol">{estate_title}</h1>
          <h3 className="my-8 work"></h3>
          <hr className="my-6" />
          <h3 className="work"></h3>
          <hr className="my-6" />
          <p className="work text-justify">
            <span className="font-bold">Review :</span>
          </p>
          <h5 className="mt-2 flex items-center">
            <span className="font-bold mr-3">Tag:</span>
            <span className="flex gap-2">
              {facilities.map((item) => (
                <>
                  <h4 className="my-5 w-32 bg-[#23be0a0d] flex justify-center items-center py-[7px] px-[10px] rounded-xl text-[#23BE0A]">
                    #{item}
                  </h4>
                </>
              ))}
            </span>
          </h5>
          <hr className="my-6" />
          <div className="">
            <h4>
              Number of Pages <span className="ml-12">: </span>
              <span className="font-semibold">s</span>
            </h4>
            <h4>
              Publisher <span className="ml-[98px]">: </span>
              <span className="font-semibold">s</span>
            </h4>
            <h4>
              Year of Publishing<span className="ml-[43px]">: </span>
              <span className="font-semibold">s</span>
            </h4>
            <h4>
              Rating<span className="ml-[120px]">: </span>
              <span className="font-semibold">j</span>
            </h4>
            <div className="mt-8 flex gap-4">
              <button className="btn py-[18px] px-7 bg-white border border-[#1313134d] font-semibold">
                Read
              </button>
              <button className="btn py-[18px] px-7 bg-[#50B1C9] border border-[#FFFFFF] font-semibold text-white">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateCardDetails;
