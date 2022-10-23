import React from "react";
import Backdrop from "../components/UI/backdrop.component";
import Card from "../components/UI/card.component";
import * as Images from "../assets/pics/therapistPics";
import ReactHtmlParser from "react-html-parser";

export default function TherapistDetails(props) {
  return (
    <div>
      <div className="z-10 fixed top-28 h-fit
       laptop:w-9/12   laptop:left-52 ">
        <Card width="w-fit">
          <div className="flex flex-col laptop:flex-row justify-around align-middle  select-none">
            <img
              src={Images[props.therapist.imageName]}
              alt="therapist"
              className="object-cover m-0 p-0 rounded-lg h-48 tablet:w-48
                aspect-[2/10] tablet:justify-self-center
                tablet:[clip-path:circle(40%_at_50%_40%)]
                tablet:[shape-outside:circle(70%_at_50%_40%)]
                laptop:h-fit
                laptop:float-left laptop:aspect-[1/1] laptop:w-72"
            />
            <div
              className="flex flex-col items-center 
            justify-center p-10 text-xs text-justify"
            >
              <span className="text-lg">
                {ReactHtmlParser(props.therapist.name)}
              </span>
              <br />
              <span className="">{ReactHtmlParser(props.therapist.intro)}</span>
              <br />
              <span className="">
                {ReactHtmlParser(props.therapist.resume)}
              </span>
            </div>
          </div>
        </Card>
      </div>
      <Backdrop click={props.toggle} />
    </div>
  );
}
