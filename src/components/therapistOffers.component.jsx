import React from "react";
import Card from "./UI/card.component";

export default function TherapistOffers() {
  return (
    <Card class="mx-5 tablet:mx-0 w-9/12 h-fit bg-opacity-80">
      <div className="tablet:py-10 tablet:px-32 text-left ">
        <p className="text-xl tablet:text-2xl">ჩვენ გთავაზობთ:</p>
        <br />
        <ul className="list-disc list-inside ml-2 tablet:text-xl">
          <li>მეგობრულ სამუშაო გარემოს</li>
          <li>კარიერული და პროფესიული განვითარების საშუალებას</li>
          <li>კონკურენტულ ანაზღაურებას</li>
        </ul>
        <br />
        <p className="text-xl tablet:text-2xl">სხვა ბენეფიტები:</p>
        <br />
        <ul className="list-disc list-inside ml-2 tablet:text-xl">
          <li>მგზავრობის ხარჯებს აანაზღაურებს კომპანია</li>
          <li>მოგამარაგებთ საჭირო ინვენტარით</li>
        </ul>
      </div>
    </Card>
  );
}
