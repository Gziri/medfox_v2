import React from "react";
import Footer from "../components/footer.component";
import Page from "../components/page.component";
import Card from "../components/UI/card.component";
import Divider from "../components/UI/Divider/divider.component";
export default function AboutUs() {
  return (
    <Page noPadding="true">
      <Divider left="ჩვენს შესახებ" leftClass="text-lg" />
      <Card class="w-11/12 bg-opacity-80">
        <div className="p-20 text-left">
          <p>
          მედფოქსი ფიზიკური მედიცინისა და რეაბილიტაციის სპეციალისტების მიერ შექმნილი ინოვაციური სერვისია, რომელიც მიზნად ისახავს,  საზოგადოებას სარეაბილიტაციო მომსახურება ნებისმიერ სივრცეში შესთავაზოს (სახლში, ოფისში, სასტუმროში ან კლინიკურ გარემოში). 
ჩვენი მაღალკვალიფიციური სპეციალისტები ადგილზე მოგაკითხავენ და თქვენს გამოჯანმრთელებაზე იზრუნებენ.
          </p>
          <br />
          <p>ჩვენ გთავაზობთ:</p>
          <br />
          <ul className="list-disc ml-6">
            <li className="text-zinc-900">ორთოპედიულ რეაბილიტაციას</li>
            <li className="text-zinc-900">ნეირორეაბილიტაციას</li>
            <li className="text-zinc-900">გერიატრიულ რეაბილიტაციას</li>
            <li className="text-zinc-900">ფუნქციურ რეაბილიტაციას</li>
            <li className="text-zinc-900">კარდიორეაბილიტაციას</li>
            <li className="text-zinc-900">პედიატრიულ რეაბილიტაციას</li>
            <li className="text-zinc-900">პოსტკოვიდურ რეაბილიტაციას</li>
            <li className="text-zinc-900">დისტანციურ სერვისებს</li>
          </ul>
        </div>
      </Card>
      <Footer />
    </Page>
  );
}
