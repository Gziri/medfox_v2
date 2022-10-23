import React from "react";
import ReactHtmlParser from "react-html-parser";

import Card from "./UI/card.component";
import DATA from "../data";

import Divider from "./UI/Divider/divider.component";
import { Link } from "react-scroll";

import * as servicePictures from "../assets/pics/servicePics/index";

const Services = () => {
  // Map all services' elements
  let count = 0;
  const services = DATA.services.map((service) => {
    count++;
    return (
      <div key={service.key}>
        {count > 1 ? (
          <Divider lineClass="my-5 bg-zinc-700 bg-opacity-20" />
        ) : null}
        <div className="laptop:flex laptop:align-middle laptop:justify-center mb-5 align-middle laptop:items-center">
          <img
            src={servicePictures[service.pictureName]}
            alt="serviceImage"
            className="h-80 w-full object-cover laptop:h-full  laptop:aspect-[7/12] laptop:w-4/12 rounded-xl"
          />
          <div className="laptop:px-10 laptop:w-7/12 text-left">
            <h1 className="text-center my-5 laptop:mb-15">
              <p className="text-2xl laptop:text-3xl  text-[#399AA1]">
                {service.name}
              </p>
            </h1>
            <span className="text-gray-800">
              {ReactHtmlParser(service.description.main)}
            </span>
            <br />
            <span className="font-bold text-gray-800 ">
              {ReactHtmlParser(service.description.listTitle)}
            </span>
            <br />
            <ul className="list-disc list-outside pl-4 text-gray-800">
              {ReactHtmlParser(service.description.list)}
            </ul>
            <br />
            <span className="text-gray-800">
              {ReactHtmlParser(service.description.last)}
            </span>
          </div>
        </div>
        <Link
          to="request"
          smooth={true}
          duration={1500}
          offset={-160}
          className="cursor-pointer rounded-md "
        >
          <button className="px-4 py-2 bg-[#399AA1] hover:bg-orange-500 text-neutral-50 rounded-md">
            მოითხოვეთ სერვისი
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <Card class="w-11/12">
        <div
          className="flex h-fit  flex-col justify-center align-middle text-center"
          id="services"
        >
          {services}
        </div>
      </Card>
    </div>
  );
};

export default Services;
