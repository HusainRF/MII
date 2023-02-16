import React from 'react'
export default function Herosection() {
  return (
    
    <div className="zl-hero-content">
    <div className="zl-hero-container">
      <div className="zl-hero-video -top" style={{opacity: 1}}>
        <div className="zl-hero-logo">
          {/* <img width={"20px"} height={"30px"} src="./images/medicaps.png" alt="ZenX Labs"  /> */}
          </div>
        <video preload="auto" autoPlay loop muted playsInline>
          <source src="./images/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="zl-hero-header -remain">
        <h1 style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>ZenX Labs</h1>
      </div>
      <div className="zl-hero-description">
        <p style={{}}>ZenX is a CeDeFi incubator that invests in and holistically supports innovative projects from their genesis through to launch and market growth</p>
      </div>
      <div className="zl-hero-down" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(-50%, 0%) translate(-0.33333px, 0px)'}}>
        <svg className="zl-svgsprite -arrow-down-o">
          <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-down-o" />
        </svg>
      </div>
    </div>
  </div>
  )
}
