import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
    // const [display, setDisplay] = useState(window.innerWidth > 1024? true : false);
  return (
    <div className="nav-header">
      <div className="header-bar">
        <div className="header-img-container">
          <NavLink to="/">
            <img src="./images/medicaps.png" alt="" width={"80px"} />
          </NavLink>
        </div>
        <ul className="nav-items">
          <li className="nav-list list-active1">
            <NavLink>About</NavLink>
              <ul className="nav-child1">
                <li className="nav-child-list1">About MII</li>
                <li className="nav-child-list1">Identity and Cultural</li>
                <li className="nav-child-list1">Team</li>
                <li className="nav-child-list1">Testimonials</li>
              </ul>
          </li>
          <li className="nav-list list-active2">
            <NavLink>Our offerings</NavLink>
              <ul className="nav-child2">
                <li className="nav-child-list2">Services</li>
                <li className="nav-child-list2">Process</li>
                <li className="nav-child-list2">Contact Us</li>
              </ul>
          </li>
          <li className="nav-list">
            <NavLink>Blog</NavLink>
          </li>
          <li className="nav-list">
            <NavLink>Events</NavLink>
          </li>
          <li className="nav-list">
            <NavLink>Contact us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
