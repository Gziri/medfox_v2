import React from "react";
import DATA from "../data";

import * as Images from "../assets/pics/therapistPics";

/*
 Add modal for therapist resume/extend parent div for text under
*/

const Therapists = (props) => {
  // const imagePath = require("../assets/pics/therapist.jpg");
  const therapists = DATA.therapists.map((t) => (
    <div
      key={t.key}
      onClick={() => (props.click(t.key))}
      className="flex justify-center flex-col text-center mb-10 items-center
        relative  cursor-pointer"
    >
      <div
        className="w-[10rem] h-[10rem] ml-2 tablet:ml-0 tablet:w-56 tablet:h-56 bg-neutral-50 hover:bg-[#399AA1] mt-2 tablet:mt-6 
          [clip-path:circle(43%_at_50%_50%)] bg-opacity-70 aspect-[1/1] flex flex-col justify-center align-middle
      "
      >
      <img
        src={Images[t.imageName]}
        alt="therapist"
        className="w-[11rem]  h-[11rem]
          object-cover  rounded-lg
          aspect-[1/1] max-w-52 tablet:w-64 tablet:h-64
          [clip-path:circle(40%_at_50%_50%)]
          "
      /></div>
      <span className=" text-neutral-50  tablet:pt-16select-none">
        {t.name}
      </span>
    </div>
  ));
  return (
    <div
      className="grid grid-cols-2  tablet:flex tablet:flex-wrap tablet:overflow-auto tablet:flex-end
      tablet:justify-center z-10 tablet:align-middle tablet:items-center rounded-xl tablet:gap-x-5 pt-5 laptop:flex-nowrap"
      id="therapists"
    >
      {therapists}
    </div>
  );
};

export default Therapists;
