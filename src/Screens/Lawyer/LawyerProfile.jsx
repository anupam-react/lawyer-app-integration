import React, { useState } from "react";
import LawyerSidebar from "./LawyerSidebar";
import UserNav from "./UserNav";
import Footer from "../../Component/Footer";
import ReviewCarousel from "../../Component/ReviewCarousel";
import "./style.scss";
import StarRating from "./StarRating";
import useLawyerProfile from "../../hooks/useLawyerProfile";
import UpdateLawyerprofile from "../../Modals/UpdateLawyerprofile";

const LawyerProfile = () => {
    const { UserInfo } = useLawyerProfile();
    const [updateProfile, setupdateProfile] = useState(false)
    console.log(UserInfo)
  const [hamb, setHamb] = useState(true);
  return (
    <div>
         <UpdateLawyerprofile show={updateProfile} onHide={() => setupdateProfile(false)} />
      <section className="HocSection" style={{ height: "200vh" }}>
        <div className="HocSide">
          <LawyerSidebar hamb={hamb} setHamb={setHamb} />
        </div>

        <div className="HocNav">
          <UserNav hamb={hamb} setHamb={setHamb} />
          <div>
            <div className="profile-container">
              <div className="profile-Body">
                <div className="profile-left">
                  <div className="profile-left-top">
                    <div>
                      <img
                        src={UserInfo?.image }
                        alt=""
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                        }}
                      />
                      <div style={{ position: "relative" }}>
                        <img
                          src="./Group 9457.png"
                          alt=""
                          style={{ marginTop: "-50px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "-20%",
                            right: "20%",
                            color: "white",
                            fontWeight: 600,
                          }}
                        >
                        {UserInfo?.categoryId?.[0]?.name}
                        </div>
                      </div>
                    </div>
                    <div className="profile-info">
                      <div
                        style={{
                          color: "#1D1D1D",
                          fontWeight: 700,
                          fontSize: "30px",
                        }}
                      >
                        Adv. {UserInfo?.fullName || UserInfo?.firstName + " " + UserInfo?.lastName}
                      </div>
                      <div className="profile-language">
                       {UserInfo?.expertises?.map((d, i)=>(
                            <span key={i}>{d?.expertise}</span>
                        ))}
                        {/* <img src="./Group (4).png" alt="" /> */}
                      </div>
                      <div className="profile-language">
                      {UserInfo?.languages?.map((d, i)=>(
                            <span key={i}>{d}</span>
                        ))}
                        {/* <img src="./Group (4).png" alt="" /> */}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            color: "#1D1D1D",
                            fontWeight: 700,
                            fontSize: "18px",
                          }}
                        >
                          Exp: {UserInfo?.experiance}
                        </div>
                        <div style={{ position: "relative" }}>
                          <img src="./Group (2).png" alt="" />
                          <div
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "20%",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <img
                              src="./Star 2.png"
                              alt=""
                              style={{ height: "fit-content" }}
                            />
                            <div style={{ color: "white" }}>{UserInfo?.rating}</div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  {/* <div className="profile-edit-button">
                    <button>Edit</button>
                  </div> */}
                  <div className="skill-container">
                    <p className="skill-title">Advocate  {UserInfo?.fullName || UserInfo?.firstName + " " + UserInfo?.lastName} Expertise</p>

                    <div className="skill-body">
                    {UserInfo?.expertises?.map((d, i)=>(
                            <div className="skill-info" key={i}>
                            <img src="./Group 9572.png" alt="" />
                            <p>
                             {d?.expertise}
                            </p>
                          </div>
                        ))}
                      {/* <div className="skill-info">
                        <img src="./Group 9750.png" alt="" />
                        <p>
                          Add <br /> Services
                        </p>
                      </div> */}
                    </div>
                    <p className="skill-title">Advocate  {UserInfo?.fullName || UserInfo?.firstName + " " + UserInfo?.lastName} Skills</p>
                    <div className="skill-body">
                    {UserInfo?.skills?.map((d, i)=>(
                             <div className="skill-info" key={i}>
                             <img src="./Group 9572.png" alt="" />
                             <p>
                               {d?.skill}
                             </p>
                           </div>
                        ))}
                  
                    </div>
                  </div>
                  <div className="profile-edit-button">
                    <button onClick={()=>setupdateProfile(true)}>Edit</button>
                  </div>
                </div>
                <div className="profile-right">
                  <div className="profile-fees">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p>/ Hearing Fees</p>
                      {/* <img
                        src="./Group (4).png"
                        alt=""
                        style={{ height: "fit-content" }}
                      /> */}
                    </div>

                    <p>
                      <span
                        style={{
                          color: "red",
                          textDecoration: "line-through",
                          paddingRight: "16px",
                        }}
                      >
                        ₹3300/Hearing{" "}
                      </span>{" "}
                      ₹{UserInfo?.hearingFee}/Hearing{" "}
                    </p>
                  </div>
                  <div className="profile-consultation">
                    <div
                      style={{
                        color: "#1D1D1D",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      Mins of consultation:
                    </div>
                    <div
                      style={{
                        color: "#0F2C64",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      {UserInfo?.minofconsultance} mins
                    </div>
                  </div>

                  <div className="profile-about">
                    <div className="head">
                      <div className="title">About Me</div>
                      <div>
                        {/* <img src="./Group (4).png" alt="" />
                        <span>Edit</span> */}
                      </div>
                    </div>
                    <p className="desc">
                     {UserInfo?.bio}
                      <span style={{ color: "#0F2C64", fontWeight: 700 }}>
                        {" "}
                        Read more...
                      </span>
                    </p>
                  </div>
                  <div className="consult-main">
                    <div className="consult">
                      <div className="consult-Assistant">
                        <img src="./Group (5).png" alt="" />
                        <p>Chat with Assistant</p>
                      </div>
                      <div>
                        <img
                          src="./Arrow 3.png"
                          alt=""
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                    <div className="consult">
                      <div className="consult-Assistant">
                        <img src="./Vector (9).png" alt="" />
                        <p>Availability</p>
                      </div>
                      <div className="edit">
                        {/* <img src="./Group (4).png" alt="" />
                        <span>Edit</span> */}
                      </div>
                    </div>
                    <div className="consult">
                      <div className="consult-Assistant">
                        <img src="./Vector (10).png" alt="" />
                        <p>Consultancy Cost @{UserInfo?.consultancyCost}/min</p>
                      </div>
                      <div className="edit">
                        {/* <img src="./Group (4).png" alt="" />
                        <span>Edit</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <StarRating rating={UserInfo?.rating}/>
              </div>
            </div>
            <ReviewCarousel>
              <div className="review-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  minus illum, voluptate amet consequuntur molestias, quam nobis
                  veniam beatae eum culpa nulla unde ab, totam corrupti
                  asperiores. Alias, dolore voluptate.
                </p>
                <div className="reviwer-info">
                  <img
                    src=""
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="reviwer-name">
                    <div
                      style={{
                        color: "#2B2D3C",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      Rushil Narayan
                    </div>
                    <div style={{ color: "#A2A5B8" }}>RERA , Panchkula</div>
                  </div>
                </div>
              </div>

             
            </ReviewCarousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LawyerProfile;
