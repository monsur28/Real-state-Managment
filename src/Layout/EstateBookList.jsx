// import PropTypes from "prop-types";
// import { CiLocationOn } from "react-icons/ci";
// import { FaDollarSign } from "react-icons/fa6";
// import { MdCompareArrows } from "react-icons/md";
// import { Link } from "react-router-dom";

// const EstateBookList = ({ item }) => {
//   const {
//     id,
//     image,
//     estate_title,
//     facilities,
//     description,
//     price,
//     location,
//     category,
//     area,
//   } = item;
//   return (
//     <div className="mt-6 p-6 grid grid-cols-1 lg:grid-cols-4 gap-[450px] border border-[#13131326] rounded-2xl min-h-min">
//       <div className="w-[400px] min-h-min py-14 rounded-2xl flex justify-center items-center ">
//         <img
//           src={image}
//           alt=""
//           className="object-cover min-h-min w-full rounded-md xl:col-span-2 bg-[#1313130d] rounded-r-2xl"
//         />
//       </div>
//       <div className="grid col-span-3 text-left">
//         <h1 className="text-2xl font-bold">{estate_title}</h1>
//         <h3>{description}</h3>
//         <div className="flex items-center gap-6">
//           <div>
//             <h5 className="flex items-center">
//               <span className="flex gap-2">
//                 {facilities.map((item) => (
//                   <>
//                     <h4 className="my-5 w-32 bg-[#23be0a0d] flex justify-center items-center py-[7px] px-[10px] rounded-xl text-[#23BE0A]">
//                       {item}
//                     </h4>
//                   </>
//                 ))}
//               </span>
//             </h5>
//           </div>
//         </div>
//         <div className="flex gap-8">
//           <div className="flex gap-3 items-center work">
//             <div className="text-2xl">
//               <CiLocationOn />
//             </div>
//             <p>{location}</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <FaDollarSign />
//             <p>{price}</p>
//           </div>
//           <div className="flex gap-3 items-center work">
//             <div className="text-2xl">
//               <MdCompareArrows />
//             </div>
//             <p>{area}</p>
//           </div>
//         </div>
//         <hr className="m-4" />
//         <div className="flex gap-5">
//           <div className="bg-[#328eff26] rounded-[30px] py-[11px] px-5 flex items-center">
//             <h3>Category: {category}</h3>
//           </div>
//           <Link
//             to={`/${id}`}
//             className="bg-[#23BE0A] rounded-[30px] py-[11px] px-5 text-white flex items-center"
//           >
//             <button>View Details</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// EstateBookList.propTypes = {
//   item: PropTypes.object,
// };
// export default EstateBookList;
