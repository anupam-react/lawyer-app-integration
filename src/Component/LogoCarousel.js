/** @format */

import React , {useState , useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LogoCarousel = () => {

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100/4); 

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100/2); 
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
        className="LogoCarousel"
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        // centerSlidePercentage={100 / 4}
        centerSlidePercentage={centerSlidePercentage}
      >
      <img
          src="https://techcrunch.com/wp-content/uploads/2013/03/youtube-logo.jpg"
          alt="Image1"
          className="logoImage"
        />
        <img
          src="https://thumbs.dreamstime.com/b/golden-falcon-bird-vector-logo-design-white-background-182823944.jpg"
          alt="Image2"
          className="logoImage"
        />
        <img
          src="https://thumbs.dreamstime.com/b/paypal-logo-white-background-vector-image-eps-72682465.jpg"
          alt="Image3"
          className="logoImage"
        />
        <img
          src="https://www.seekpng.com/png/detail/397-3971371_tata-logo-vector-symbol-tata-logo-png.png"
          alt="Image3"
          className="logoImage"
        />
        <img
          src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/08/10/194330-tata-chemicals-twitter.png?itok=szqYh2H6"
          alt="Image3"
          className="logoImage"
        />
      </Carousel>
    </>
  );
};

export default LogoCarousel;
