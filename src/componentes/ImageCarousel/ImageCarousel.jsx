import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./imageCarousel.css";

const images = [
  { url: "./img/3.png" },
  { url: "img/2.png" },
  { url: "img/1.png" },
];

function ImageCarousel() {
  return (
    <div className="container-carousel" id="beneficios">
      <h1 className="carousel-title">Beneficios Exclusivos</h1>
      <div className="slider">
        <SimpleImageSlider
          width={700}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
