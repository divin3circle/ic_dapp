import React from "react";
import { IoIosFootball } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between mx-4">
      {/* logo */}
      <Link to="/" className="no-underline">
        <div className="flex justify-center items-center pb-2 cursor-pointer">
          <h1 className="text-red-500">Fantasy🪄</h1>
        </div>
      </Link>
      {/* items */}
      <div className="items-center flex">
        <ul className="flex justify-between gap-12">
          <Link
            to="/app"
            className=" font-bold no-underline text-black list-none hover:scale-95 cursor-pointer hover:text-red-500 ease-in duration-100"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className=" font-bold no-underline text-black hover:scale-95 cursor-pointer hover:text-red-500 ease-in duration-100"
          >
            Explore
          </Link>
          <Link
            to="/fantasy"
            className=" font-bold no-underline text-black list-none hover:scale-95 cursor-pointer hover:text-red-500 ease-in duration-100"
          >
            Fantasy
          </Link>
          <Link
            to="/profile"
            className=" font-bold no-underline text-black list-none hover:scale-95 cursor-pointer hover:text-red-500 ease-in duration-100"
          >
            Profile
          </Link>
        </ul>
      </div>
      {/* user */}
      <div className="flex items-center justify-between px-4 cursor-pointer">
        <div className="rounded-full ">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
            alt="user"
            width={30}
            height={30}
            className="rounded-full mx-4 shadow-lg"
          />
        </div>
        <button className="rounded-md font-bold text-white px-4 py-2 cursor-pointer border-none bg-red-500 shadow-lg">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
