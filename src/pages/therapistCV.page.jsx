import React from "react";
import { useState } from "react";

import Page from "../components/page.component";
import Divider from "../components/UI/Divider/divider.component";
// import Therapists from "../components/therapist.component";
import CVForm from "../components/cvForm.component";
import Footer from "../components/footer.component";
import TherapistCVDetails from "../components/tharapistCVDetails.component";
import TherapistOffers from "../components/therapistOffers.component";

export default function TherapistCV() {
  const [showTherapistDetails, showDetailsHandler] = useState(false);
  const [therapistDetails, detailsHandler] = useState("");

  const showHandler=()=>{

    showDetailsHandler(!showTherapistDetails);
  }

  const therapistClickHandler = (details) => {
    if (showTherapistDetails === false) {
    showDetailsHandler(!showTherapistDetails);

      detailsHandler(details);

    } else {
      
      detailsHandler({});
    }
  };

  return (
    <div>
        {showTherapistDetails ? (
        <TherapistCVDetails
          click={showHandler}
          id={therapistDetails}
        />
      ) : null}
    <Page noPadding={true}>
      <Divider left="გახდით ჩვენი გუნდის წევრი" leftClass="text-lg" class="pt-5" />
      <br />
      <TherapistOffers/>
      <br />
      {/* <Divider left="ჩვენი თერაპევტები" leftClass="text-xl" class="pt-5" />
      <br />
      <Therapists click={therapistClickHandler}/>
      <br /> */}
      <br />
      <Divider left="შემოგვიერთდით" leftClass="text-lg" />
      <div>
        <CVForm />
      </div>
      <Footer/>
    </Page></div>
  );
}
