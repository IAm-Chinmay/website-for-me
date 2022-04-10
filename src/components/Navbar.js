import React from 'react'
import "./css/Navbar.css"
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <>
      <nav>
    <div className="navbar ">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="logo">
          <h1>Explore More</h1>
        </div>
        <div className="menu-items">
          <li style={{"margin-top" : "137px"}}><strong><Link to={'/'} className="links">Home</Link></strong></li>
          <li>
            <Link to={"/About"}  className="links"><strong>about</strong></Link>
            </li>
          <li><strong><a href="https://github.com/IAm-Chinmay?tab=repositories" className="links"
                target={"_blank"}>Projects</a></strong>
          </li>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}
