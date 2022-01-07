import React from "react";
import Header from "../../componentes/Header/Header";
import VideoBanner from "../../componentes/VideoBanner/VideoBanner";
import Values from "../../componentes/Values/Values";
import Jobs from "../../componentes/Jobs/Jobs";
import Contact from "../../componentes/Contact/Contact";
import Footer from "../../componentes/Footer/Footer";
import FullJobs from "../../componentes/FullJobs/FullJobs";
import ImageCarousel from "../../componentes/ImageCarousel/ImageCarousel";

function Landing() {
  return (
    <>
      <Header />
      <VideoBanner />
      <Values />
      <ImageCarousel />
      <Jobs />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
