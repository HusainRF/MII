import React from 'react'
import SingleTeaMember from './SingleTeaMember'
import './Team.css'
export default function OurTeam() {
  return (

    <section className="zl-staff">
    <div className="zl-staff-content">
      <div className="zl-staff-container">
        <div className="zl-staff-header">
          <h2>
            <div style={{position: 'relative', display: 'inline-block', willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>Our Team</div>
          </h2>
        </div>

        <div className="zl-staff-items">
        <SingleTeaMember/>
        <SingleTeaMember/>
        </div>
         </div>
    </div>
  </section>
    )
}
