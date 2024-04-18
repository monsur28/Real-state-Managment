import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/logo2.png";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        MySwal.fire({
          title: "Good job!",
          text: "LogOut Succesfully",
          icon: "success",
        });
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-full mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/">
          <img className="w-1/2 text-xl" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="mr-1 border border-gray-400 rounded-lg p-2">
            {user.email}
          </div>
        ) : (
          <></>
        )}
        <div className="dropdown dropdown-end flex items-center gap-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            {user ? (
              <div
                className="w-10 rounded-full border border-gray-950"
                title={user.displayName}
              >
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            ) : (
              <div className="w-10 rounded-full">
                <RxAvatar className="text-[40px]" />
              </div>
            )}
          </div>
          <div>
            {user ? (
              <button onClick={handleLogOut} className="btn">
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <a className="btn">Login</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
