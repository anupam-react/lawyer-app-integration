/** @format */

import React , {useState , useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss'

const ConsultCarousel = ({children}) => {

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100/4); 

  // useEffect(() => {
  //   const handleResize = () => {
  //     const viewportWidth = window.innerWidth;

  //     if (viewportWidth <= 760) {
  //       setCenterSlidePercentage(100/2); 
  //     } else if (viewportWidth <= 1220) {
  //       setCenterSlidePercentage(100/2); 
  //     } else {
  //       setCenterSlidePercentage(100/4);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize); 
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);


  return (
    <>
      <Carousel
        dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={2000}
        infiniteLoop={false}
        autoPlay={false}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        className="ConsultCarousel"
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        centerSlidePercentage={100 / 2}
        // centerSlidePercentage={centerSlidePercentage}
      >
   {children}
      </Carousel>
    </>
  );
};

export default ConsultCarousel;
