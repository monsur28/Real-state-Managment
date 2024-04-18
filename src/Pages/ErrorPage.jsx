import { Link } from "react-router-dom";
import page from "../assets/404-error.jpg";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[600px] text-lg">
      <img src={page} alt="" />
      <Link to="/" className="btn bg-[#23BE0A] mt-4 text-white">
        Go Back To Home
      </Link>
    </div>
  );
}
