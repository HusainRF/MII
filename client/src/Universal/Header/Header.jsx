import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div className="nav-header zl-navbar-strip">
      <div className="zl-navbar-container header-bar">
        <div className="header-img">
          <NavLink to="/"><img src="./images/medicaps.png" alt="" width={"80px"} /></NavLink>
        </div>
        <div className="item1">
          <NavLink to="/ourofferings">Services</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </div>
        <div className="item2">
          <NavLink to="/contactus">Contact Us</NavLink>
        </div>
      </div>
    </div>
  
  /* //   <div className="zl-navbar-strip">
  //   <div className="zl-navbar-container">
  //     <div className="zl-navbar-grid">
  //       <div className="zl-navbar-grid-col -left"><a className="zl-navbar-logo" href="/" aria-label="Home"><img src="/assets/img/logo.png" srcSet="/assets/img/logo@2x.png 2x" alt="" /></NavLink></div>
  //       <div className="zl-navbar-grid-col -center">
  //         <div className="zl-navbar-navs" role="navigation"><a className="zl-navbar-nav" href="/services/"><span>Services</span></NavLink><a className="zl-navbar-nav" href="/about/"><span>About Us</span></NavLink><a className="zl-navbar-nav" href="/blog/"><span>Blog</span></NavLink></div>
  //       </div>
  //       <div className="zl-navbar-grid-col -right">
  //         <div className="zl-navbar-navs" role="navigation"><a className="zl-navbar-nav -inverse" href="/contact/"><span>Contact</span></NavLink></div>
  //         <div className="zl-navbar-toggle"><button className="zl-btn zl-btn_toggle" aria-label="Menu"><span /><span /></button></div>
  //       </div>
  //     </div>
  //   </div>
  // </div> */
  )
}
