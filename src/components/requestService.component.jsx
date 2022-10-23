import React from "react";

import Card from "../components/UI/card.component";

const RequestService = () => (
  <Card class="bg-opacity-70 w-9/12">
    <div
      className="w-full text-center flex flex-col justify-center align-middle items-center"
      id="request"
    >
      <p className="text-2xl pb-4 ">სერვისის მოთხოვნა</p>
      <form
        action="https://formsubmit.co/contact@medfox.ge"
        method="POST"
        className="h-full w-10/12 flex flex-col  align-middle"
      >
        <input
          type="text"
          id="Patient_Name"
          name="Patient_Name"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="სახელი გვარი"
        />

        <input
          type="number"
          id="Phone_Number"
          name="Phone_Number"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="ტელეფონი"
        />
        <select
          type="select"
          id="Requested_Name"
          name="Requested_Name"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          required
        >
          <option value="Not chosen">- აირჩიეთ სერვისი -</option>
          <option value="ორთოპედიული">ორთოპედიული რეაბილიტაცია</option>
          <option value="ნეირო">ნეირორეაბილიტაცია</option>
          <option value="გერიატრიული">გერიატრიული რეაბილიტაცია</option>
          <option value="ფუნქციური">ფუნქციური რეაბილიტაცია</option>
          <option value="კარდიო">კარდიორეაბილიტაცია</option>
          <option value="პედიატრიული">პედიატრიული რეაბილიტაცია</option>
          <option value="პოსტკოვიდური">პოსტკოვიდური რეაბილიტაცია</option>
          <option value="დისტანციური">დისტანციური სერვისები</option>
        </select>
        <input
          type="text"
          id="Contact_At"
          name="Contact_At"
          className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
          placeholder="როდის დაგიკავშირდეთ?"
        />

        <div className="w-full flex justify-center align-middle">
          <input
            type="submit"
            className="py-2 w-full bg-neutral-200 rounded-xl 
            hover:bg-orange-500 hover:cursor-pointer hover:text-neutral-50 my-2"
            value="გაგზავნა"
          />
        </div>
        <input type="hidden" name="_next" value="medfox.ge"></input>  
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
    </div>
  </Card>
);

export default RequestService;
