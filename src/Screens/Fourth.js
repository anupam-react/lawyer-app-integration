/** @format */

import React from "react";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/Navbar2";
import useBlog from "../hooks/useBlog";
import { getDateFromISOString } from "../utils";

const Fourth = () => {
  const {
    category,
    blogPopular,
    blog} = useBlog();

  return (
    <>
      <Navbar2 />

      <div className="FourthScreen">
        <div className="left">
          <h4>Blog</h4>
          <select>
          <option>All Category</option>
            {category?.map((d, i )=>(
              <option key={i}>{d?.title}</option>
            ))}
          </select>
        </div>
        <div className="right">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search for a blog" />
        </div>
      </div>

      <div className="FourthScreenFirst">
        <div className="main">
          <img src="./Images/47.png" alt="" />
          <p className="head">
            How to draft, review and revoke a Power of Attorney?
          </p>
          <p className="desc">Prachi Darji</p>
          <div className="two-sec">
            <p>13-Dec-19</p>
            <p style={{ color: "#0F2C64" }}>Property Law</p>
          </div>
        </div>
        <div className="main main2">
          <img src="./Images/48.png" alt="" />
          <p className="head">Process of filing Partition Suit in India</p>
          <p className="desc">Prachi Darji</p>
          <div className="two-sec">
            <p>13-Dec-19</p>
            <p style={{ color: "#0F2C64" }}>Property Law</p>
          </div>
        </div>
      </div>

      <div className="FourthScreenSecond">
       {blog?.map((d, i)=>(
        <div className="main" key={i}>
          <img src={d?.image} alt="" />
          <div className="under">
            <p>{d?.title}</p>
          </div>
          <p className="desc">
            {" "}
            Prachi Darji <br />
            {getDateFromISOString(d?.createdAt)}
          </p>
          <p className="last">Property Law</p>
        </div>
       )) }


      
      </div>

      <div className="FourthScreenthird">
        <div className="one">
          <h3>Most Viewed Posts</h3>
          <div className="MainBig">
          {blogPopular?.map((d, i )=>(
              <div className="main" key={i}>
              <img src={d?.image} alt="" />
              <div className="under">
                <p>{d?.title}</p>
              </div>
              <p className="desc">
                {" "}
                Prachi Darji <br />
                {getDateFromISOString(d?.createdAt)}
              </p>
              <p className="last">Property Law</p>
            </div>

          ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fourth;
