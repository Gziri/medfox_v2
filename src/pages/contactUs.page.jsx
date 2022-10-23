import React from "react";
import Footer from "../components/footer.component";
import Page from "../components/page.component";
import Card from "../components/UI/card.component";

export default function CountactUs() {
  return (
    <Page noPadding="true">
      <Card class="w-9/12 bg-opacity-70 desktop:mb-56">
        <div
          className="w-full flex flex-col text-center justify-center items-center"
          id="cv"
        >
          <p className="text-2xl pb-4 text-zinc-900">მოგვწერეთ</p>
          <form
            action="https://formsubmit.co/contact@medfox.ge"
            method="POST"
            className="h-full w-10/12 flex flex-col  align-middle"
          >
            <input
              type="text"
              id="Name"
              name="Name"
              className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
              placeholder="სახელი"
              required
            />

            <input
              type="email"
              id="Email"
              name="Email"
              className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
              placeholder="ელ-ფოსტა"
              required
            />
            <input
              type="tel"
              id="Mobile_Phone"
              name="Mobile_Phone"
              className="border-2 rounded-lg w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2"
              placeholder="ტელეფონი"
              required
            />

            <textarea
              id="Text"
              name="Text"
              className="border-2 rounded-lg min-h-32  w-full border-stone-500 border-opacity-50 outline-none 
            focus:border-orange-400 transition duration-200 my-2 scrollbar"
              placeholder="წერილი"
              required
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
      <Footer />
    </Page>
  );
}
