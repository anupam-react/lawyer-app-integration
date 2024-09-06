import React, { useState } from "react";

import UserNav from "./UserNav";
import Footer from "../../Component/Footer";
import "./style.scss";
import useLawyerProfile from "../../hooks/useLawyerProfile";

import UserSide from "./UserSide";
import UpdateCustomerProfile from "../../Modals/UpdateCustomerProfile";

const UserProfile = () => {
    const { cusomerInfo , WalletInfo } = useLawyerProfile();
    const [updateProfile, setupdateProfile] = useState(false)
    console.log(cusomerInfo)
  const [hamb, setHamb] = useState(true);
  return (
    <div>
         <UpdateCustomerProfile show={updateProfile} data={cusomerInfo} onHide={() => setupdateProfile(false)} />
      <section className="HocSection" style={{ height: "200vh" }}>
        <div className="HocSide">
          <UserSide WalletInfo={WalletInfo} UserInfo={cusomerInfo} />
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
                        src={cusomerInfo?.image }
                        alt=""
                        style={{
                          width: "160px",
                          height: "160px",
                          borderRadius: "50%",
                        }}
                      />
                  
                    </div>
                    <div className="profile-info">
                      <div
                        style={{
                          color: "#1D1D1D",
                          fontWeight: 700,
                          fontSize: "30px",
                        }}
                      >
                       {cusomerInfo?.fullName || cusomerInfo?.firstName + " " + cusomerInfo?.lastName}
                      </div>
                     
            
                      <div    style={{
                          color: "#1D1D1D",
                          fontWeight: 700,
                          fontSize: "18px",
                        }}>{cusomerInfo?.email}</div>
                      <div    style={{
                          color: "#1D1D1D",
                          fontWeight: 700,
                          fontSize: "18px",
                        }}>{cusomerInfo?.phone}</div>
                    </div>
                  </div>
                  {/* <div className="profile-edit-button">
                    <button>Edit</button>
                  </div> */}
                  
                  <div className="profile-edit-button">
                    <button onClick={()=>setupdateProfile(true)}>Edit</button>
                  </div>
                </div>
              
              </div>
              
            </div>
         
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserProfile;
