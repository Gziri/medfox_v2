import { Routes, Route } from "react-router";

import backgroundVid from "./assets/videos/main.mp4";

import MainPage from "./pages/main.page";
import Header from "./components/header/header.component";
import ServicesPage from "./pages/services.page";
import TherapistCV from "./pages/therapistCV.page";
import AboutUs from "./pages/aboutUs.page";
import CountactUs from "./pages/contactUs.page";

function App() {
  const backgroundVideo = (
    <video
      autoPlay
      loop
      muted
      playsinline
      style={{
        position: "fixed",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-2",
        muted: "true",
      }}
    >
      <source src={backgroundVid} type="video/mp4" />
    </video>
  );

  const backgroundLayer = (
    <div
      className="bg-[#399AA1] bg-opacity-70 h-screen w-screen"
      style={{
        position: "fixed",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%,-50%)",
        zIndex: "-1",
      }}
    ></div>
  );

  return (
    <div className="font-geo scrollbar h-full">
      <Header />
      {backgroundLayer}
      {backgroundVideo}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="therapist" element={<TherapistCV />} />
        <Route path="contact" element={<CountactUs />} />
      </Routes>
    </div>
  );
}

export default App;

