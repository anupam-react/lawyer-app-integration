/** @format */

import React, { useEffect, useState } from "react";
import HOC from "./User/HOC";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAllLawyers from "../hooks/useAllLawyers";
import AppoinmentCustomer from "./User/AppoinmentCustomer";
import LawyerCard2 from "./LawyerCard2";

const ElevenScreen = () => {
  const { UserInfo , singleInstantLawyer , setSingleInstantLawyer } = useAllLawyers();

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100 / 4);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100 / 2);
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100 / 4);
      } else {
        setCenterSlidePercentage(100 / 4);
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
      <h4 className="centerNinthHeading">Instant Appointment</h4>
      <div className="ElevenCarousel">
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
        >
          <div className="main">
            <p>Tax Lawyer</p>
          </div>

          <div className="main">
            <p>Corporate Lawyers</p>
          </div>

          <div className="main">
            <p>Real estate</p>
          </div>

          <div className="main">
            <p>Criminal Lawyer</p>
          </div>

          <div className="main">
            <p>Family Lawyer</p>
          </div>

          <div className="main">
            <p>Corporate Lawyers</p>
          </div>

          <div className="main">
            <p>Civil Rights Lawyer</p>
          </div>

          <div className="main">
            <p>Corporate Lawyers</p>
          </div>
        </Carousel>
      </div>
      <div className="NinthFirst">
        <div className="left">
          {UserInfo?.map((d, i)=>(
           <LawyerCard2 unique={i} data={d} setSingleInstantLawyer={setSingleInstantLawyer}/>
          ))}
        </div>
        <AppoinmentCustomer data={singleInstantLawyer} />
      </div>
    </>
  );
};

export default HOC(ElevenScreen);
