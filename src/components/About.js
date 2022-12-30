import React from "react";
import "./css/about.css";
import coverpage from "./img/about-pic.jpg";
import site1 from "./img/site-1.gif";
import site2 from "./img/ezgif.com-gif-maker.gif";
import site3 from "./img/ezgif.com-gif-maker (1).gif";
import { Bounce, AttentionSeeker } from "react-awesome-reveal";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function About() {
  return (
    <>
      <helmet>
        <title>Chinmay- About</title>
      </helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      ></link>
      <div
        style={{ color: "#000" }}
        class="content container  d-flex justify-content-center"
      >
        <div class="info">
          <AttentionSeeker triggerOnce delay={2500} effect="shakeX">
            <h3>Hey ,</h3>
            <p>
              I am Chinmay Mulay, I was born at 18 April 2003
              <br />I Am a Web Developer
            </p>
            <p></p>
          </AttentionSeeker>
        </div>
        <div class="info-img">
          <Bounce direction="down" delay={500} triggerOnce>
            <img src={coverpage} alt="cover img" />
          </Bounce>
        </div>
      </div>
      <div style={{ color: "#fff" }} className="website_info">
        <h1>My Live Projects :</h1>
        <div className="site_info">
          <AnimationOnScroll
            delay={0}
            animateIn="animate__rollIn"
            animateOut="animate__fadeOutLeft"
          >
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://know-valorant.netlify.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <img src={site1} alt={"site1"} />
            </a>
          </AnimationOnScroll>
          <div className="site__mainInfo">
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://know-valorant.netlify.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>VALORANT INFO</h3>
            </a>
            <p>
              Website created with the react and api that provide information
              <br />
              Website gives information on game called Valorant.
            </p>
          </div>
        </div>

        <div className="site_info">
          <div className="site__mainInfo">
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://geobook-2b3e8.web.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <h3>GEOBOOK</h3>{" "}
            </a>
            <p>
              Website is developed with MERN stack.
              <br />
              It is social site that let user share the places they visited.
            </p>
          </div>
          <AnimationOnScroll
            // delay={500}
            animateIn="animate__fadeInRight"
            animateOut="animate__fadeOutRight"
          >
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://geobook-2b3e8.web.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <img src={site2} alt={"site2"} />{" "}
            </a>
          </AnimationOnScroll>
        </div>

        <div className="site_info">
          <AnimationOnScroll
            delay={0}
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
          >
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://confession-proj.vercel.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <img src={site3} alt={"site3"} />
            </a>
          </AnimationOnScroll>
          <div className="site__mainInfo">
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://confession-proj.vercel.app/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <h3>CONFESSION</h3>
            </a>
            <p>
              Website created with the NESTJS.
              <br />
              Website is used to confess your deeds anonymously.
              <br />I created this website by collaborating with{" "}
              <a
                style={{ textDecoration: "unset" }}
                rel={"noreferrer"}
                target={"_blank"}
                href="https://github.com/Yuvraj102"
              >
                {" "}
                @Yuvraj
              </a>
              .<br />
              Front-End was developed by me.
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/IAm-Chinmay"
        rel={"noreferrer"}
        target={"_blank"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {" "}
        <h4 style={{ textAlign: "center", color: "#fff" }}>MORE</h4>
      </a>

      <footer
        class="foot text-center text-white"
        style={{ "background-color": "#3d3c3d" }}
      >
        <div
          class="text-center text-dark p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-0"
            rel={"noreferrer"}
            href="https://github.com/IAm-Chinmay"
            role="button"
            data-mdb-ripple-color="light"
            target={"_blank"}
          >
            <i style={{ color: "#fff" }} class="fab fa-github"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            rel={"noreferrer"}
            href="https://linkedin.com/in/iam-Chinmay"
            role="button"
            data-mdb-ripple-color="light"
            target={"_blank"}
          >
            <i style={{ color: "#fff" }} class="fab fa-linkedin"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            rel={"noreferrer"}
            href="https://www.instagram.com/i_am_cmay/"
            role="button"
            target={"_blank"}
            data-mdb-ripple-color="light"
          >
            <i style={{ color: "#fff" }} class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            rel={"noreferrer"}
            href="https://twitter.com/ChinmayMulay6"
            role="button"
            target={"_blank"}
            data-mdb-ripple-color="light"
          >
            <i style={{ color: "#fff" }} class="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
