import React from "react";

const Card = (props) => {
  const childDiv = props.class
    ? `${props.class} bg-neutral-50 p-5 text-justify rounded-md mb-5`
    : " w-9/12  bg-neutral-50 p-5 text-justify rounded-xl mb-5";
  return (
    <div className="mt-6 w-full  justify-center flex">
      <div className={childDiv} style={{opacity:props.opacity}}>{props.children}</div>
    </div>
  );
};

export default Card;
