import React from "react";
import { useNavigate } from "react-router";

import Card from "../components/UI/card.component";
import Divider from "../components/UI/Divider/divider.component";

import Page from "../components/page.component";
import Medium from "../assets/pics/partners/medium.png";

const MainPage = () => {
  const navigate = useNavigate();
  const welcomeText = (
    <div className="items-center w-full flex align-middle justify-center select-none ">
      <p className="text-2xl text-center tracking-wide text-neutral-50  ">
        თქვენი ჯანმრთელობა ჩვენი პრიორიტეტია
      </p>
    </div>
  );
  return (
    <Page>
      <div className=" flex flex-col pt-10 justify-between items-center relative h-full">
        {welcomeText}

        <Card class="w-fit px-8 flex flex-col items-center font-geoCaps">
          <p className="mb-3 text-xl tablet:text-2xl font-bold tracking-wider select-none">მე ვარ</p>
          <div className="flex gap-7  flex-col tablet:flex-row ">
            <button
              className="bg-[#399AA1] bg-opacity-70 tracking-wide text-zinc-900 font-bold pt-2 text-md tablet:text-xl w-40  h-12 rounded-md
    shadow-lg shadow-stone-300 hover:bg-orange-500 hover:text-neutral-200 transition-all  select-none"
              onClick={() => navigate("services")}
            >
              პაციენტი
            </button>
            <button
              className="bg-[#399AA1] bg-opacity-70 tracking-wide text-zinc-900 font-bold  pt-2 text-md tablet:text-xl w-40  h-12 rounded-md  
    shadow-lg shadow-stone-300 hover:bg-orange-500 hover:text-neutral-200 transition-all  select-none"
              onClick={() => navigate("therapist")}
            >
              თერაპევტი
            </button>
          </div>
        </Card>
        <button
          className="bg-zinc-500 tracking-wider flex items-center align-middle justify-center   text-white ring-2 ring-white bg-opacity-50 pt-2 text-md tablet:text-xl w-56  h-10 rounded-md  
    shadow-lg  hover:bg-orange-500 hover:text-neutral-200 transition-all font-geoCaps"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://medfox.medium.com/", "_blank");
          }}
        >
          <img src={Medium} className="h-7 tablet:h-8 pb-2 invert select-none" alt="medium" />
          ბლოგი
        </button>
        <Divider
          class=" pt-4 bottom-0"
          left=""
          leftClass="text-lg"
          partners={false}
        />
      </div>
    </Page>
  );
};

export default MainPage;
