import React from "react";
import Card from "./UI/card.component";
import DATA from "../data";
import * as Images from "../assets/pics/therapistPics";
import ReactHtmlParser from "react-html-parser";
import { Icon } from "@iconify/react";

export default function TherapistCVDetails(props) {
  const therapist = DATA.therapists.filter((x) => x.key === props.id)[0];
  return (
    <div className="flex justify-center align-middle items-center mt-10 w-full h-full fixed z-20">
      <div
        onClick={props.click}
        className="h-full w-full z-20 fixed bg-opacity-60 bg-[#399aa1]  "
      />
      <Card class="h-fit w-fit max-w-4xl max-h-[85vh] mx-4 z-30 flex flex-col tablet:flex-row items-center justify-center align-middle">
        <div
          className="h-2 w-2 mr-3 self-end tablet:self-start"
          onClick={props.click}
        >
          <Icon icon="akar-icons:cross" />
        </div>
        <img
          src={Images[therapist.imageName]}
          alt="therapist"
          className="object-cover m-0 p-0 rounded-lg h-[20vh] w-[20vh]
                aspect-[2/10] tablet:aspect-[1/1] tablet:w-96 tablet:h-80"
        />
        <div className="tablet:mx-4 hidden tablet:flex tablet:flex-col">
          <p className="text-center text-2xl pt-3 font-geoCaps font-bold">
            {therapist.name}
          </p>
          <div className=" overflow-y-scroll tablet:overflow-hidden rounded-md shadow-inner shadow-[#b9e9ec]  ">
            <p className="text-md  text-center p-2 font-bold">
              {ReactHtmlParser(therapist.intro)}
            </p>
            <p className="text-md p-2 text-left">
              {ReactHtmlParser(therapist.resume)}
            </p>
          </div>
        </div>
          <p className="tablet:hidden text-center text-xl pt-3 font-geoCaps font-bold">
            {therapist.name}
          </p>
          <div className="tablet:hidden overflow-y-scroll rounded-md shadow-inner shadow-[#b9e9ec]  ">
            <p className="text-xs text-center p-2 font-bold">
              {ReactHtmlParser(therapist.intro)}
            </p>
            <p className="text-sm p-2 text-left">
              {ReactHtmlParser(therapist.resume)}
            </p>
        </div>
      </Card>
    </div>
  );
}
