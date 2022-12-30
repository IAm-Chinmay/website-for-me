import React from "react";
import "./css/Navbar.css";

import {AttentionSeeker } from "react-awesome-reveal";
import { WavyLink } from "react-wavy-transitions";

export default function navbar() {
  return (
    <>
      <nav>
        <div className="navbar " style={{background : "#3d3c3d"}}>
          <div className="container nav-container" >
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines" >
              <AttentionSeeker triggerOnce delay={1500} effect="shakeX">
              <span style = {{background : "#fff"}} className="line line1"></span>
              <span style = {{background : "#fff"}} className="line line2"></span>
              <span style = {{background : "#fff"}} className="line line3"></span>
              </AttentionSeeker>
            </div>
            <div className="logo" style={{color : "#fff"}}>
              <h1>Explore More</h1>
            </div>
            <div className="menu-items" style = {{background : "#3d3c3d" , color : "#fff"}}>
            <WavyLink
                    to={"/"}
                    direction="up"
                    color="#333333"
                    className="links"
                  >
              <li style={{ "margin-top": "137px" }}>
                    Home
              </li>
                  </WavyLink>
                <WavyLink to={"/About"} color="#333333" className="links">
              <li>
               <strong>ABOUT</strong>
              </li>
                </WavyLink>
              <li>
                <strong>
                  <a
                    href="https://github.com/IAm-Chinmay?tab=repositories"
                    rel={"noreferrer"}
                    className="links"
                    target={"_blank"}
                    style = {{ color : "#fff"}}
                  >
                    Projects
                  </a>
                </strong>
              </li>
            </div>  
          </div>
        </div>
      </nav>
    </>
  );
}
