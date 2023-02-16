import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="nav-header zl-navbar-strip">
      <div className="zl-navbar-container header-bar">
        <div className="header-img">
          <a href="/"><img src="./images/medicaps.png" alt="" width={"80px"} /></a>
        </div>
        <div className="item1">
          <a href="/ourofferings">Services</a>
          <a href="/events">Events</a>
          <a href="/blogs">Blogs</a>
        </div>
        <div className="item2">
          <a href="/contactus">Contact Us</a>
        </div>
      </div>
    </div>
  //   <div className="zl-navbar-strip">
  //   <div className="zl-navbar-container">
  //     <div className="zl-navbar-grid">
  //       <div className="zl-navbar-grid-col -left"><a className="zl-navbar-logo" href="/" aria-label="Home"><img src="/assets/img/logo.png" srcSet="/assets/img/logo@2x.png 2x" alt="" /></a></div>
  //       <div className="zl-navbar-grid-col -center">
  //         <div className="zl-navbar-navs" role="navigation"><a className="zl-navbar-nav" href="/services/"><span>Services</span></a><a className="zl-navbar-nav" href="/about/"><span>About Us</span></a><a className="zl-navbar-nav" href="/blog/"><span>Blog</span></a></div>
  //       </div>
  //       <div className="zl-navbar-grid-col -right">
  //         <div className="zl-navbar-navs" role="navigation"><a className="zl-navbar-nav -inverse" href="/contact/"><span>Contact</span></a></div>
  //         <div className="zl-navbar-toggle"><button className="zl-btn zl-btn_toggle" aria-label="Menu"><span /><span /></button></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}
