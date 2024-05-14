/** @format */

import React from "react";
import Navbar2 from "../Component/Navbar2";
import Footer from "../Component/Footer";

const SixthScreen = () => {
  return (
    <>
      <Navbar2 />

      <div className="sixthScreen">
        <h3>About Us</h3>
        <p>
          {" "}
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          {" "}
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          {" "}
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          {" "}
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="sixthScreenFirst">
        <div>
          <p className="head">27,000+</p>
          <p className="desc"> Resolved queries</p>
        </div>
        <div>
          <p className="head">10,000+</p>
          <p className="desc">Lawyer's network</p>
        </div>
        <div>
          <p className="head">350+</p>
          <p className="desc">Cities</p>
        </div>
        <div>
          <p className="head">5</p>
          <p className="desc">Countries</p>
        </div>
      </div>

      <div className="sixthScreenSecond">
        <div>
          <p className="head">Need a Lawyer for your legal requirements?</p>
          <p className="desc">
            Are you having property, employment, or perhaps divorce-related
            legal issues?
          </p>
        </div>
        <button>Book Consultation</button>
      </div>
      <hr className="sixthHr" />

      <div className="sixthScreenSecond">
        <div>
          <p className="head">
            Want to book a service from the comfort of your home?
          </p>
          <p className="desc">
            Book services like Name Change, Birth Certificate, Marriage
            Certificate, or even Death Certificate without engaging a lawyer.?
          </p>
        </div>
        <button>Book a Service</button>
      </div>
      <hr className="sixthHr" />
      <div className="sixthScreenSecond">
        <div>
          <p className="head">Searching for legal information?</p>
          <p className="desc">
            Want to know the step-by-step procedures for services, read blogs,
            find lawyers, or ask questions?
          </p>
        </div>
        <button>Search a Query</button>
      </div>
      <hr className="sixthHr" />
      <div className="sixthScreenSecond toNew">
        <div>
          <p className="head">
            Want to talk to an expert if you need a service or a laywer?
          </p>
          <p className="desc">
            Just leave your details here and our experts will get back to
            discuss your needs.
          </p>
        </div>
        <button>Talk to an Expert</button>
      </div>

      <Footer />
    </>
  );
};

export default SixthScreen;
