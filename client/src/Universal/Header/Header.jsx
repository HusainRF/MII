import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='header-bar'>
      <img src='./images/medicaps.png' alt='' width={"80px"}/>
      <div className='item1'>
        <a href='/'>Home</a>
        <a href='/ourofferings'>Our Offerings</a>
        <a href='/events'>Events</a>
        <a href='/blogs'>Blogs</a>
      </div>
      <div className='item2'>
          <a href='/contactus'>Contact Us</a>
      </div>
    </div>
  )
}
