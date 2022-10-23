import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => (
  <div
    className=" w-full py-10 h-fit bg-neutral-200 flex text-center align-middle items-center flex-col
      text-zinc-800 p-0 m-0  mt-28  shadow-reverse bg-opacity-80 
      !mb-0 !bottom-0"
  >
    <div className='flex'>
    
    
    <div className="flex flex-col col-span-4 items-end">
      <div className="mr-2 mb-1">
        <Icon icon="akar-icons:phone" color="#399aa1" width="1.5rem" />
      </div>
      <div className="mr-2 mb-1">
        <Icon icon="fluent:mail-24-regular" color="#399aa1" width="1.5rem" />
      </div>
      <div className="mr-2 mb-1">
        <Icon icon="iconoir:facebook" color="#399aa1" width="1.5rem" />
      </div>
      <div className="mr-2 mb-1">
        <Icon
          icon="ant-design:instagram-outlined"
          color="#399aa1"
          width="1.5rem"
        />
      </div>
    </div>
    <div className="flex flex-col col-span-7 tablet:col-span-5 items-start">
      <a href="tel:595285000" className="hover:text-orange-500 mb-1">
        +(995) 595 285 000
      </a>
      <a
        href="mailto:contact@medfox.ge"
        className=" hover:text-orange-500 mb-1"
      >
        contact@medfox.ge
      </a>
      <a
        href="https://fb.com/MedFoxGE"
        target="_blank"
        rel="noreferrer"
        className="hover:text-orange-500 mb-1"
      >
        fb.com/MedFoxGE
      </a>
      <a
        href="https://www.instagram.com/_med_fox_"
        target="_blank"
        rel="noreferrer"
        className="hover:text-orange-500 mb-1"
      >
        @_med_fox_
      </a>
    </div>
    </div>
  </div>
);

export default Footer;
