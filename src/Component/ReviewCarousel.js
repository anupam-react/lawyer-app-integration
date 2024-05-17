/** @format */

import React , {Children, useEffect , useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewCarousel = ({children}) => {

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100/4); 

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100/1); 
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100/2); 
      } else {
        setCenterSlidePercentage(100/4);
      }
    };

    window.addEventListener("resize", handleResize); 
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="mainCarosel">
        <div className="ReviewCarouselDiv"></div>
        <Carousel
          dynamicHeight={false}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          interval={1000}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
          centerSlidePercentage={centerSlidePercentage}
          className="ReviewCarousel"
        >
          {children}
 
        </Carousel>
      <div className="ReviewCarouselDiv2"></div>
      </div>
    </>
  );
};

export default ReviewCarousel;
