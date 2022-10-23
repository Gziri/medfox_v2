import React, { useState } from "react";
import Page from "../components/page.component";

import Services from "../components/services.component";
import Divider from "../components/UI/Divider/divider.component";
import RequestService from "../components/requestService.component";
import Therapists from "../components/therapist.component";
import Footer from "../components/footer.component";
import TherapistCVDetails from "../components/tharapistCVDetails.component";

export default function ServicesPage() {
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
        {/* <Divider left="ჩვენი თერაპევტები" leftClass="text-lg" class="mt-4" />

        <Therapists click={therapistClickHandler} /> */}

        <Divider left="სერვისები" leftClass="text-lg" class="mt-4" />

        <Services />

        <Divider left="მოითხოვეთ სერვისი" leftClass="text-lg" class="mt-4" />
        <RequestService />
        <Footer />
      </Page>
    </div>
  );
}
