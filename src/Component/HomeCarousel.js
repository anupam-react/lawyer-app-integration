/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCard from "./HomeCard";
import HomeCard2 from "./HomeCard2";
import useAbout from "../hooks/useAbout";

const HomeCarousel = () => {
  const {about} = useAbout()
  console.log(about)
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        dynamicHeight={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        interval={1000}
        infiniteLoop={true}
        autoPlay={true}
        className="homePageCarosel"
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                onClick={clickHandler}
               className='carouselPrev'
               style={{ background: "transparent", border: "none" }}
              >
                {" "}
                <img
                  src="../Images/2.png"
                  alt=""
                  className='carouselPrev'
                />
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button
                onClick={clickHandler}
                style={{ background: "transparent", border: "none" }}
                className="carouselNext"
              >
                {" "}
                <img
                  src="../Images/3.png"
                  alt=""
                  className="carouselNext"
                />
              </button>
            )
          );
        }}
      >
        <HomeCard title="About Us" desc={about?.[0]?.content}/>
        <HomeCard2 title={about?.[0]?.descriptionArray?.[0]?.title}  desc={about?.[0]?.descriptionArray?.[0]?.description}/>
        <HomeCard title={about?.[0]?.descriptionArray?.[1]?.title}  desc={about?.[0]?.descriptionArray?.[1]?.description}/>
        <HomeCard2 title={about?.[0]?.descriptionArray?.[2]?.title}  desc={about?.[0]?.descriptionArray?.[2]?.description}/>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
