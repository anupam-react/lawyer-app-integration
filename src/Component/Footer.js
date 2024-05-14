/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="upper">
          <div>
            <p className="head specialHead">Policy</p>
            <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.{" "}
            </p>
            <img
              src="./Images/logo2.png"
              alt="logo"
              className="upperImg"
              onClick={() => navigate("/")}
            />
          </div>

          <div>
            <ul>
              <p className="head">Legal Services</p>
              <li>{">"}Property Possession Delay - RERA</li>
              <li>{">"}Mutual Consent Divorce</li>
              <li>{">"}Cheque Bounce Complaint</li>
              <li>{">"}Unpaid Salary - Legal Notice</li>
              <li>{">"}Consumer Matter - Legal Notice</li>
              <li>{">"}Consumer Case</li>
              <li>{">"}Suit - Recovery of Money</li>
              <li>{">"}Possession Delay - NCLT</li>
              <li>{">"}Trademark Registration</li>
              <li>{">"}Legal Notice</li>
              <li>{">"}Wrongful Termination - Legal Notice</li>
              <li>{">"}Canada Immigration (PR)</li>
              <li>{">"}Legal Documentation</li>
              <li>{">"}Posh</li>
            </ul>
          </div>

          <div>
            <ul>
              <p className="head">Government Registrations</p>
              <li>{">"}Marriage Certificate</li>
              <li>{">"}Name Change</li>
              <li>{">"}GST Registration</li>
              <li>{">"}Legal Heir Certificate</li>
              <li>{">"}Court Marriage</li>
              <li>{">"}Company Incorporation</li>
              <li>{">"}FSSAI License</li>
            </ul>
          </div>

          <div>
            <ul>
              <p className="head">Book Consultation</p>
              <li>{">"}Property Law</li>
              <li>{">"}Recovery of Money</li>
              <li>{">"}General Legal</li>
              <li>{">"}Corporate and Individual Taxation</li>
              <li>{">"}Divorce</li>
              <li>{">"}Startup</li>
              <li>{">"}Criminal</li>
              <li>{">"}Licenses</li>
              <li>{">"}Family</li>
              <li>{">"}IPR</li>
              <li>{">"}Consumer Protection</li>
              <li>{">"}Immigration Services</li>
              <li>{">"}Employment</li>
              <li>{">"}Corporate</li>
              <li>{">"}Civil</li>
              <li>{">"}Marriage</li>
            </ul>
          </div>

          <div className="downWard">
            <p className="head"> Contact Info</p>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-location-dot"></i>
              </li>
              <li>
                {" "}
                302, D 247/A4 Procapitus Business Park, <br />
                Sector 63, Noida Uttar Pradesh, <br />
                201301
              </li>
            </ul>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-phone"></i>
              </li>
              <li> 0120 408 0513</li>
            </ul>
          </div>

          <div className="downWard">
            <ul style={{ display: "flex", gap: "10px" }}>
              <li>
                <i class="fa-solid fa-envelope"></i>
              </li>
              <li> Email456@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
