import React from 'react'
import './css/about.css'
import coverpage from './img/about-pic.jpg';

export default function About() {
  return (
    <>
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
        <div class="content container  d-flex justify-content-center">
        <div class="info">
            <h3>Hey ,</h3>
            <p>I am Chinmay Mulay . I was born at 18 April 2003</p>
            <p></p>
        </div>
        <div class="info-img">
            <img src={coverpage}alt="cover img" style={{"width" : "448px" , "height" : "408px"}}/>
        </div>
    </div>

    

    <footer class="foot text-center text-white" style={{"background-color" : "#f1f1f1"}}>

        <div class="text-center text-dark p-3" style={{"background-color" : "rgba(0, 0, 0, 0.2)"}}>
            <a
            class="btn btn-link btn-floating btn-lg text-dark m-0"
            href="https://github.com/IAm-Chinmay"
            role="button"
            data-mdb-ripple-color="dark"
            target={"_blank"}
            ><i class="fab fa-github"></i
          ></a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://linkedin.com/in/iam-Chinmay"
              role="button"
              data-mdb-ripple-color="dark"
              target={"_blank"}
              ><i class="fab fa-linkedin"></i
            ></a>
            

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/i_am_cmay/"
              role="button"
              target={"_blank"}
              data-mdb-ripple-color="dark"
              ><i class="fab fa-instagram"></i
            ></a>

              <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/ChinmayMulay6"
              role="button"
              target={"_blank"}
              data-mdb-ripple-color="dark"
              ><i class="fab fa-twitter"></i
            ></a>
        </div>
      </footer>
    </>
  )
}
