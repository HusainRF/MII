import React from 'react'
import Services from './Services.jsx'
export default function OurOfferings() {
  return (
    <div>
      <div className="zl-hero-content">
        <div className="zl-hero-container">
          <div className="zl-hero-video" style={{opacity: 1}}>
            <video preload="auto" autoPlay loop muted playsInline>
              <source src="./images/2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="zl-hero-header -rb">
            <h1 style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>An incubator <br />for wide adoption</h1>
          </div>
          <div className="zl-hero-description">
            <p style={{}}>We nurture decentralized projects that drastically improve existing systems</p>
          </div>
          <div className="zl-hero-down" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
            <svg className="zl-svgsprite -arrow-down-o">
              <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-down-o" />
            </svg>
          </div>
        </div>
      </div>
      <Services/>
    </div>
  )
}
