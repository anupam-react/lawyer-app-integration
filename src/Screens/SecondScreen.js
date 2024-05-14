/** @format */

import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";

const SecondScreen = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <Phone />
      <Navbar />

      <div className="secondScreen">
        <div className="left">
          <p className="head">
            Join Advo <br /> Legal Network
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
          </p>

          <div className="two-sec">
            <img src={"./Images/28.png"} alt="" />
            <div>
              <p className="first">Profile</p>
              <p className="second">
                Create a profile under the guidelines of Advocate Act -1961
              </p>
            </div>
          </div>

          <div className="two-sec">
            <img src={"./Images/29.png"} alt="" />

            <div>
              <p className="first">Appointments and Consultations</p>
              <p className="second">
                Get paid appointments & consultations from the comfort of your
                home
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <form>
            <input type="text" placeholder="Name :" />
            <br />
            <input type="text" placeholder="Email Addresss :" />
            <br />
            <input type="text" placeholder="Mobile :" />
            <br />
            <input type="text" placeholder="Password :" />
            <br />
            <input type="text" placeholder="Bar Council ID :" />
            <br />
            <button>Sign Up</button>
          </form>
        </div>
      </div>

      <div className="secondBack">
      <div className="secondScreenCenter">
        <p className="head">Case Manager</p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et
        </p>
      </div>

      <div className="secondScreenTwo-Sec">
        <div className="left">
          <img src="./Images/30.gif" alt="" />
        </div>

        <div className="right">
          <div className="main">
            <img src={"./Images/31.png"} alt="" />
            <div>
              <p className="first">Instant Notification</p>
              <p className="second">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
              </p>
            </div>
          </div>

          <div className="main">
            <img src={"./Images/32.png"} alt="" style={{ height: "29.92px" }} />
            <div>
              <p className="first">Save Time & Money</p>
              <p className="second">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
              </p>
            </div>
          </div>

          <div className="main">
            <img
              src={"./Images/33.png"}
              alt=""
              style={{ height: "41.88px", width: "35.4px", marginLeft: "5px" }}
            />
            <div>
              <p className="first"> Develop Trust</p>
              <p className="second">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondScreenTwo2">
        <div className="left">
          <p className="head">The Problem</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy{" "}
          </p>
        </div>
        <div className="right">
          <img src="./Images/35.png" alt="" />
        </div>
      </div>
      <hr className="secondHr" />

      <div className="secondScreenTwo2">
        <div className="right">
          <img src="./Images/37.png" alt="" />
        </div>
        <div className="left">
          <p className="head">The Solution</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy{" "}
          </p>
        </div>
      </div>
      <hr className="secondHr" />

      <div className="secondScreenTwo2">
        <div className="left">
          <p className="head">Technology</p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy{" "}
          </p>
        </div>
        <div className="right">
          <img src="./Images/38.png" alt="" />
        </div>
      </div>
      <hr className="secondHr" />


      <div className="secondScreenThreeSec">
        <img src='./Images/39.png' alt='' />

        <div>
          <p className="head">Advo Mission</p>
          <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et</p>
          <p className="desc2">10,000+ Advocates have joined MyAdvo family. Have you?</p>
        </div>

        <button>Get Listed Now</button>
      </div>


      </div>

    <Footer />

    </>
  );
};

export default SecondScreen;
