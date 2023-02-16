import React from "react";
import Copyright from "./Copyright";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-container">
        <h1>Want to Know More?</h1>
        <u>
          <h1>Get in Touch</h1>
        </u>
        <div className="footer-bottom">
          <div className="bootom-firstline">
            <div>
              <img src="./images/medicaps.png" alt="" width={"120px"} />
              <img src="./images/25year.png" alt="" width={"100px"} />
            </div>
            <div className="footer-pages">
              <h6>Home</h6>
              <h6>Our Offerings</h6>
              <h6>Blogs</h6>
              <h6>Events</h6>
            </div>
          </div>
          <div className="social-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
