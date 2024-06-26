/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Phone from "../Component/Phone";


const SeventhScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <Navbar />
      <Phone />

      <div className="seventSecond"></div>

      <div className="seventScreen">
        <div className="left">
          <div className="upper">
            <img src="./Images/76.png" alt="" />
            <div>
              <p className="head">Property Possession Delay - RERA</p>
              
            </div>
          </div>

          <div className="mid">


            <p className="over">Overview</p>
            <hr style={{ border: "1px solid #0F2C64" }} />

            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr,{" "}
            </p>

            <p className="head2">Steps involved in a RERA complaint</p>

            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Document Verification</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Complaint Drafting</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Filing of Complaint</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Reply</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Hearing and Arguments</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Judgment</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="towSec">
              <div className="empty"></div>
              <div>
                <p>Execution</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </div>

          {/* <div className="seventScreenThird">
            <div className="mina">
              <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt=""
              />
              <div>
                <p>Charandas Singh</p>
                <p>New Delhi, India</p>
              </div>
            </div>
            <p className="desc">
              Got my property issues solved by a lawyer I was put in touch with
              by MyAdvo's team. I was relieved after I received full refund for
              possession delay. Smooth and transparent service that I highly
              recommend!
            </p>
          </div> */}

          <div className="seventScreenFourth">
            <p className="head">Frequently Asked Questions</p>
            <hr />

            <div className="twoSec">
              <p>What is RERA?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>Where RERA is applicable?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                Is RERA applicable to both purchase and rental transactions?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> Is RERA applicable on commercial projects?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                Will RERA be applicable to existing projects also or only to the
                future ones?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                Where RERA is not applicable? Are there any exceptions to the
                Registration of projects under the RERA Act?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> Where to file a RERA complaint?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                What is the right time to file a complaint? Immediately after
                the agreement expires or should I wait?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                What is the process of filing a complaint in RERA in case of a
                delay in handing over the possession of the purchased property?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                Can an association of persons file a single complaint under
                RERA?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                What are the reliefs that I can ask for in my complaint to RERA?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                What is the total compensation expected from the builder through
                a RERA complaint? What interest rate would be payable by the
                Builder?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                What is the period within which the Regulatory Authority is
                required to dispose of the complaint?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                Can the bank from which I have taken a loan to purchase the
                property be made a party in the Complaint?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                How to ensure if your project is Real Estate Regulatory
                Authority (RERA) compliant?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>What happens if the RERA decides in favor of the builder?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>
                {" "}
                What is RERA number? Where to check the RERA registration
                number?
              </p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> Will RERA increase property prices?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> Where is RERA Office?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> Has RERA been implemented in all states?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> How will RERA impact real estate sector?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> How RERA impacts Home-Buyers?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> How RERA impacts Builders?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p> How RERA impacts Real Estate Agents?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="twoSec">
              <p>How will RERA impact the real estate sector?</p>
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>

          <div className="seventScreenFivth" onClick={() => navigate('/eight')}>
            <p className="head">List of Lawyers</p>
            <hr />

            <div className="threeSec">
              <img src="./Images/90.png" alt="" />
              <div className="centerONe">
                <h3>Advocate. Yash</h3>
                <h4>Legal Property Lawyer</h4>
                <h5>English, Hindi, Panjabi</h5>

                <div className="twoTwo">
                  <h6>Exp: 21 yrs</h6>
                  <img src="./Images/91.png" alt="" />
                </div>

                <h6>30 min. consultation</h6>
              </div>

              <div className="RightONe">
                <h4>consultation fee</h4>
                <h2> ₹2000</h2>

                <button>Consult now</button>
              </div>
            </div>
            <hr />

          </div>
        </div>

        
      </div>

      <Footer />
    </>
  );
};

export default SeventhScreen;
