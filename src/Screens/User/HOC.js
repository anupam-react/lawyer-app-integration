import React, { useState } from "react";
import Footer from "../../Component/Footer";
import UserNav from "./UserNav";
import UserSide from "./UserSide";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(true);
    return (
      <>
        <section className='HocSection' >
          <div className="HocSide">
            <UserSide hamb={hamb} setHamb={setHamb} />
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

export default HOC;
