/** @format */

import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/Navbar2";
import Phone from "../Component/Phone";
import ReviewCarousel from "../Component/ReviewCarousel";

const ThirdScreen = () => {

  useEffect(() => {
  window.scrollTo(0,0)
  },[])
  return (
    <>
      <Navbar2 />
      <Phone />

    <div  className="backImg">

    <div className="thirdScreenBanner">
        <div className="main">
          <h5 className="head">Legit Helping you with your legal hassles!</h5>
          <p className="desc">
            Legit - your Litigation Management Tool is the most comprehensive &
            easy-to-use product in the market.{" "}
          </p>
          <p className="desc">
            {" "}
            We provide features like Case Updates, Secured backups, Database for
            documents and so much more!
          </p>

          <div className="two-btn">
            <button>Get started for free</button>
            <button>Schedule a demo</button>
          </div>
        </div>
      </div>

      <div className="thirdScreenFirst">
        <img src={"./Images/42.png"} alt="" />
      </div>

      <div className="thirdScreenSecond">
        <div className="left">
          <p className="head">Easy-To-Use Litigation Management Tool</p>
          <div className="three-sec">
            <p>About</p>
            <p>For Corporates</p>
            <p>For lawyers</p>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            d
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="btn">Schedule a demo</p>
        </div>
        <div>
          <img src="./Images/43.png" alt="" />
        </div>
      </div>

      <div className="thirdScreenSecond">
        <div className="left">
          <p className="head">Manage Your Legal Matters</p>

          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="btn">Schedule a demo</p>
        </div>
        <div>
          <img src="./Images/43.png" alt="" />
        </div>
      </div>

      <div className="thirdScreenSecond">
        <div>
          <img src="./Images/45.png" alt="" />
        </div>
        <div className="left">
          <p className="head">Manage Your Legal Matters</p>

          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="btn">Schedule a demo</p>
        </div>
      </div>
      <div className="thirdScreenSecond">
        <div className="left">
          <p className="head">Manage Your Legal Matters</p>

          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>
          <p className="btn">Schedule a demo</p>
        </div>

        <div>
          <img src="./Images/44.png" alt="" />
        </div>
      </div>


      <div className="secondScreenThreeSec" style={{display : 'flex' , justifyContent : 'justifyContent'}}>
        <div>
          <p className="head">Easy-To-Use Litigation Management Tool</p>
          <p className="head" style={{marginTop: '20px'}}>Legit helps you build a better practice and manage your cases</p>
        </div>
        <button>Get Listed Now</button>
      </div>
    </div>


    <ReviewCarousel />
    <Footer />
    </>
  );
};

export default ThirdScreen;
