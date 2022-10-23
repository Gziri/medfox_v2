import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

// import {Link} from 'react-scroll';

const Navigation = () => {
  let location = useLocation().pathname;
  return (
    <div className="hidden tablet:flex flex-col   tablet:flex-row tablet:justify-self-center">
      <Link
        to="/"
        className={`mr-5 cursor-pointer hover:text-[#399AA1] ${
          location === "/" ? "text-[#399AA1] " : null
        }`}
      >
        მთავარი
      </Link>

      <Link
        to="services"
        className={`mr-5 cursor-pointer hover:text-[#399AA1] ${
          location === "/services" ? "text-[#399AA1] " : null
        }`}
      >
        სერვისები
      </Link>

      <Link
        to="aboutUs"
        className={`mr-5 cursor-pointer hover:text-[#399AA1] ${
          location === "/aboutUs" ? "text-[#399AA1] " : null
        }`}
      >
        ჩვენს შესახებ
      </Link>

      <Link
        to="contact"
        className={`cursor-pointer hover:text-[#399AA1] ${
          location === "/contact" ? "text-[#399AA1] " : null
        }`}
      >
        კონტაქტი
      </Link>
    </div>
  );
};

export default Navigation;
