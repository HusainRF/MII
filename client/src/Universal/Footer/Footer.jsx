import React from 'react'
import Copyright from './Copyright'
import './footer.css'
export default function Footer() {
  return (
    <div className='footer-box'>
        <h1>Want to Know More?</h1>
        <u style={{color:"green"}}><h1>Get in Touch</h1></u>

        <div className='footer-bottom'>
            <div className='bootom-firstline'>
            {/* <img src='./images/medicaps.png' alt=''/> */}
            <h6>Home</h6>
            <h6>Our Offerings</h6>
            <h6>Blogs</h6>
            <h6>Contactus</h6>
            </div>
            <div className='social-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <Copyright/>
    </div>
  )
}
