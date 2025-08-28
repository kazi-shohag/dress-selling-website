import React from "react";
import bannerimg from "../assets/paseidon72-0HQL-1EwB6c-unsplash.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-300 lg:p-5 sm:p-2 md:p-4 w-full">
      <div className=" text-center">
        <h1 className="lg:text-4xl md:text-2xl sm:text-base">
          Welcome to REEVE
        </h1>
      </div>
      <nav>
        <div className="text-center justify-center flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
      </nav>
      <div className="relative ">
        <img src={"../assets/paseidon72-0HQL-1EwB6c-unsplash.jpg"} alt="" />
        <img
          className=" mt-5 lg:h-96 md:h-56 sm:h-40 w-full"
          src={bannerimg}
          alt=""
        />
        <div className="text-center justify-center">
          <NavLink
            to="/all-category"
            className="btn btn-success absolute top-1/2 -translate-x-1/2 bg-yellow-200 p-2 lg:text-3xl md:text-2xl sm:text-base"
          >
            All Category
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
