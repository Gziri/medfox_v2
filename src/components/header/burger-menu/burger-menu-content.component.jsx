import React from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Card from "../../UI/card.component";
// import {Link} from 'react-scroll';

const BurgerMenuContent = (props) => {
  let location = useLocation().pathname;

  // const backgroundLayer = (
  //   <div
  //     className="bg-[#399AA1] bg-opacity-50 h-screen w-screen"
  //     style={{
  //       position: "fixed",
  //       width: "100%",
  //       left: "50%",
  //       top: "55%",
  //       height: "90%",
  //       objectFit: "cover",
  //       transform: "translate(-50%,-50%)",
  //       zIndex: "-1",
  //     }}
  //     onClick={props.handler}
  //   />
  // );

  return (
    <div
      className={`absolute top-[-25px] w-fit h-fit z-20 transition-all ${
        props.show ? "left-full" : " translate-x-[-85%] translate-y-[30%]"
      }`}
    >
      <div className={`self-start fixed z-90 ${!props.show?"top-10 left-64":"top-[-20rem] left-[40rem]"}`} onClick={props.click}>
      <Icon icon="akar-icons:chevron-right" />
      </div>
      <Card class="  w-full h-fit flex justify-center items-center rounded-tr-none shadow-2xl rounded-bl-none">
        <div className="flex flex-col items-start text-xl py-5 px-10">
          <Link
            to="/"
            className={`mr-5 cursor-pointer hover:text-[#399AA1] text-left ${
              location === "/" ? "text-[#399AA1]" : null
            }`}
            onClick={props.click}
          >
            მთავარი
          </Link>

          <Link
            to="services"
            className={`mr-5 cursor-pointer hover:text-[#399AA1] text-left ${
              location === "/services" ? "text-[#399AA1] " : null
            }`}
            onClick={props.click}
          >
            სერვისები
          </Link>

          <Link
            to="aboutUs"
            className={`mr-5 cursor-pointer hover:text-[#399AA1] text-left ${
              location === "/aboutUs" ? "text-[#399AA1] " : null
            }`}
            onClick={props.click}
          >
            ჩვენს შესახებ
          </Link>

          <Link
            to="contact"
            className={`mr-5 tablet:mr-0 cursor-pointer hover:text-[#399AA1] text-left ${
              location === "/contact" ? "text-[#399AA1] " : null
            }`}
            onClick={props.click}
          >
            კონტაქტი
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BurgerMenuContent;
