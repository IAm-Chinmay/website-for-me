import React from 'react'
import "./css/index.css"
import avtar from "./img/avtar.jpg"


export default function Mainindex() {
  return (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
     <div className="main  d-flex justify-content-center">
    <div className="avtar">
      <img src={avtar} alt = "Avatar" className="rounded-circle shadow-5" style={{ "width" : "150px" }} />
    </div>
  </div>
  <div className="desc">
    <h1 className=" d-flex justify-content-center"><mark> Hi, I Am </mark></h1>
  </div>

  <div className="animated-text">
    <div className="text fs-3">
      <span>C</span>
      <span>H</span>
      <span>I</span>
      <span>N</span>
      <span>M</span>
      <span>A</span>
      <span>Y</span>
    </div>

    <div className="lead d-flex justify-content-center">
      <p>I am lazy , but can cross my limits and achive crazy things.</p>
    </div>
  </div>
  <footer className="text-center text-white" style={{background : "#f1f1f1"}}>
    <div className="text-center text-dark p-3" style={{ background : "rgba(0, 0, 0, 0.2)"}}>
     By:
      <label className="text-dark" >Chinmay</label>
    </div>
  </footer>
    </>
  )
}
