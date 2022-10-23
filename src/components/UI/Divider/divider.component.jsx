import React from "react";
import {ReactComponent as Jerarsi} from "../../../assets/pics/partners/jerarsi.svg"


export default function Divider(props) {
  return (
    <div className={`${props.class} w-full flex flex-col mt-10 tablet:mt-4 tablet:flex-row justify-center items-center`}>
      <div id="left" className="self-start ml-2 tablet:self-center tablet:ml-0">
        {props.left ? (
          <div
            className={`${props.leftClass }  select-none  mb-3 tablet:mb-0 tablet:ml-6 mr-2  text-neutral-50 whitespace-nowrap`}
          >
            {props.left}
          </div>
        ) : null}
      </div>
      <div
        id="center"
        className={`${
          props.lineClass ? props.lineClass : "bg-white"
        } h-[2px] w-full  mx-2 rounded-lg`}
      />

      <div id="right">
        {props.right ? (
          <div
            className={`${props.rightClass} mr-6 ml-2 text-neutral-50 whitespace-nowrap`}
          >
            {props.right}
          </div>
        ) : null}
      </div>
      
      <div id="partners">
        {props.partners ? (
          <div
            className={`${props.partnerClass} mt-3 tablet:mt-0 mr-6 ml-2 text-neutral-50 whitespace-nowrap`}
          >
           <a href="https://www.jerarsi.ge" target={"_blank"} rel="noreferrer"> <Jerarsi className="w-16"/></a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
