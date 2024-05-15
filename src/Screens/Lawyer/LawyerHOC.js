import React, { useState } from "react";
import Footer from "../../Component/Footer";
import UserNav from "./UserNav";
import LawyerSidebar from "./LawyerSidebar";

const LawyerHOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className='HocSection' >
          <div className="HocSide">
            <LawyerSidebar hamb={hamb} setHamb={setHamb} />
          </div>

          <div  className="HocNav">
            <UserNav hamb={hamb} setHamb={setHamb} />
            <div>
              <Wcomponenet />
            </div>
          </div>
          

        </section>

        <Footer />

        
      </>
    );
  };
};

export default LawyerHOC;
