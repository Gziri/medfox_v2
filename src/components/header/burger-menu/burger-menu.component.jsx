import React, { useState } from "react";
import BurgerMenuContent from "./burger-menu-content.component";

const BurgerMenu = () => {
  const [state, burgerStateHandler] = useState(true);

  const burgerHandler = () => {
    burgerStateHandler(!state);
  };

  return (
    <div className=" mr-4">
      <div
        className={`flex flex-col justify-center tablet:hidden items-center w-12 h-8 rounded-md bg-opacity-90`}
        onClick={() => burgerHandler()}
      >
        <div className={`w-1/2 h-[0.1rem] rounded-lg  ${state?'bg-[#399aa1]':'bg-orange-400'}  mb-1`}></div>
        <div className={`w-1/2 h-[0.1rem] rounded-lg  ${state?'bg-[#399aa1]':'bg-orange-400'}  mb-1`}></div>
        <div className={`w-1/2 h-[0.1rem] rounded-lg  ${state?'bg-[#399aa1]':'bg-orange-400'}  mb-1`}></div>
      </div>
        <div>
          <BurgerMenuContent click={() => burgerHandler()} show={state} />
        </div>
    </div>
  );
};

export default BurgerMenu;
