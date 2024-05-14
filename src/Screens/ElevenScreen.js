/** @format */

import React , {useEffect , useState} from "react";
import HOC from "./User/HOC";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ElevenScreen = () => {



  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100/4); 

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 760) {
        setCenterSlidePercentage(100/2); 
      } else if (viewportWidth <= 1220) {
        setCenterSlidePercentage(100/4); 
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
          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>

          <div className="two-sec">
            <img src="./Images/90.png" alt="" className="leftImage" />

            <div className="mid">
              <h3>Advocate. Yash</h3>
              <h4>Legal Property Lawyer</h4>
              <h5>English, Hindi, Panjabi</h5>
              <div className="two">
                <h6>Exp: 21 yrs</h6>
                <img src="./Images/91.png" alt="" />
              </div>

              <h6>30 min. consultation</h6>
            </div>

            <div className="right">
              <h4>consultation fee</h4>
              <h5>₹2000</h5>

              <button>Consult now</button>
            </div>
          </div>
        </div>

        <div className="rightFirst">

          <div className="two-Sec">
            <img src="./Images/90.png" alt="" className="profile" />

            <div>
              <p className="firstP">Adv. Suhani</p>
              <p className="secondP">Legal advisor , Corporate Advisor </p>
              <p className="secondP">English, Hindi, Punjabi</p>

              <div className="two-Sec" style={{ marginTop: "0" }}>
                <p className="secondP">Exp: 21 yrs</p>
                <img src="./Images/91.png" alt="" style={{ width: "60px" }} />
              </div>
            </div>
          </div>

          <button>Consult</button>

          <div className="NonthThird">
            <div>
              <p>/ Hearing Fees</p>
              <p>
                {" "}
                <span style={{ color: "red" }}>₹3300/Hearing </span>{" "}
                ₹3300/Hearing{" "}
              </p>
            </div>

            <div style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}>
              <p>Mins of consultation</p>
              <p>665644 mins</p>
            </div>
          </div>

          <p className="NinthFourth">Advocate Suhani Expertise</p>

          <div className="NinthFifth">
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Corporate <br /> Advisor
              </p>
            </div>
          </div>

          <p className="NinthFourth">Advocate Suhani Skills</p>
          <div className="NinthFifth">
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Real estate <br /> Lawyer
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Corporate <br /> Lawyer
              </p>
            </div>
            <div>
              <img src="./Images/99.png" alt="" />
              <p>
                Legal <br /> Advisor
              </p>
            </div>
          </div>

          <div className="descRip">
            <p className="head">About Me</p>
            <p className="desc">
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful c
            </p>
          </div>

          <div className="Stars">
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p>4.95</p>
          </div>

          <p
            style={{
              marginLeft: "7%",
              marginTop: "0",
              fontFamily: "Open Sans",
            }}
          >
            Based on 1348 Reviews
          </p>

          <div className="NinthSixth">
            <div className="under">
              <div className="left">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
                <div>
                  <p>Russie Taylor</p>
                  <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="right">
                <p className="first">Cannulation</p>
                <p className="second">15 March,2021</p>
              </div>
            </div>

            <p className="Alloy">Installation of alloy wheel</p>
          </div>

          <div className="consult">
            <div>
              <i class="fa-regular fa-message"></i>
              <p>Consult Now</p>
            </div>
            <div>
              {" "}
              <p> {">"} </p>{" "}
            </div>
          </div>
          <div className="consult">
            <div>
              <i class="fa-regular fa-calendar"></i>
              <p>Availability</p>
            </div>
            <div>
              {" "}
              <p> {">"} </p>{" "}
            </div>
          </div>
          <div className="consult">
            <div>
              <i class="fa-solid fa-video"></i>
              <p>Consultancy Cost @300/min</p>
            </div>
            <div>
              {" "}
              <p> {">"} </p>{" "}
            </div>
          </div>
          <div className="consult">
            <div>
              <p>Status (Active)</p>
            </div>
            <div>
              <div className="toogle-btn">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ElevenScreen);
