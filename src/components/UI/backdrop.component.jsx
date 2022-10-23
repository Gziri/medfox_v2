import React from "react";

export default function Backdrop(props) {
  return (
    <div
      className="w-full h-full top-0 left-0 fixed backdrop-blur-lg  
    flex justify-center align-middle
    "
    onClick={props.click}
    >
      <div className="w-full flex flex-col items-center justify-center 
      align-middle h-4/6 mt-32 self-center">

        {props.children}
      </div>
    </div>
  );
}
