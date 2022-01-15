import React, {useEffect, useState} from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./imageCarousel.css";

const images = [
  // { url: img1 },
  { url: "img/1.png" },
  { url: "img/5.png" },
  { url: "img/4.png" },
  { url: "img/3.png" },
  { url: "img/2.png" },
];

function ImageCarousel() {
  const [width, setWidth] = useState(600);
  const [heigth, setHeigth] = useState(600);

  useEffect(() => {
    if(window.innerWidth <= 700) {
        console.log("responsive")
        setWidth(350)
        setHeigth(350)
      } else {
        setWidth(600)
        setHeigth(600)
        
      }
      
    window.addEventListener("resize", () => {
      if(window.innerWidth <= 700) {
        console.log("responsive")
        setWidth(350)
        setHeigth(350)
      } else {
        setWidth(600)
        setHeigth(600)
        
      }
    })
  }, []);

  return (
    <div className="container-carousel" id="beneficios">
      <h1 className="carousel-title">Beneficios Exclusivos</h1>
      <div className="slider">
        <SimpleImageSlider
          width={width}
          height={heigth}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
