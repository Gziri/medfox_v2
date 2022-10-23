import React from "react";
// import Logo from "./logo.component";
import Navigation from "./Navigation/navigation.component";
import BurgerMenu from "./burger-menu/burger-menu.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div
      className=" w-full fixed top-0 left-0  px-2 py-3  z-50
    bg-gray-100 shadow-lg bg-opacity-80"
    >
      <div className="container mx-auto justify-between items-center w-full flex   align-middle ">
              
          <Link to="/" className="justify-self-start">
            <Logo className="w-10 ml-4 tablet:ml-0" />
          </Link>
          <div className="justify-self-end">
            <Navigation />
            <BurgerMenu />
          </div>
      </div>
    </div>
  );
};

export default Header;
