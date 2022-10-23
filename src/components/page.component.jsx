import React from "react";

export default function Page(props) {
  return (
    <div className={`h-[100vh]  w-full pt-20 ${props.noPadding ? null : "p-2"}`}>
      {props.children}
    </div>
  );
}
