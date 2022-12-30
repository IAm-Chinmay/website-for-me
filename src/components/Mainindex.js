import React from 'react'
import "./css/index.css"
import avtar from "./img/avtar.jpg"


export default function Mainindex() {
  return (
    <div className="slider-thumb">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
     <div className="main  ">
    <div className="avtar">
      <img src={avtar} alt = "Avatar" className="rounded-circle shadow-5" style={{ "width" : "150px" }} />
    </div>
  {/* <div className="desc"> */}
  <div className='intro-text'>
    <h3> Hi, I Am </h3>
    <h1>Chinmay</h1>
    </div>
  </div>
  {/* </div> */}

  <div className="animated-text">
    <h1>WEB</h1>
    <div className="text fs-3">
      <span>D</span>
      <span>E</span>
      <span>V</span>
      <span>E</span>
      <span>L</span>
      <span>O</span>
      <span>P</span>
      <span>E</span>
      <span>R</span>
    </div>

    <div className="lead d-flex justify-content-center">
      <p style={{color:"#fff"}}>I am lazy , but can cross my limits and achive crazy things.</p>
    </div>
  </div>
  <footer className="text-center text-white" style={{background : "#3d3c3d"}}>
    <div className="text-center text-dark p-3 foottext" style={{ background : "rgba(0, 0, 0, 0.2)",color:"#fff"}}>
    <p style={{color:"#fff"}}> By:Chinmay</p>
    </div>
  </footer>
    </div>
  )
}
