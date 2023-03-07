import React from 'react'
import SingleTeaMember from './SingleTeaMember'
import './Team.css'
export default function OurTeam() {
  return (

    <section className="zl-staff -inverse" style={{backgroundColor:"white"}}>
    <div className="zl-staff-content">
      <div className="zl-staff-container">
        <div className="zl-staff-header">
          <h2>
            <div style={{position: 'relative', display: 'inline-block', willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>Our Team</div>
          </h2>
        </div>

        <div className="zl-staff-items" >
        <SingleTeaMember img={"https://media.licdn.com/dms/image/C5603AQE3rSup8NMJAA/profile-displayphoto-shrink_200_200/0/1577668183645?e=1682553600&v=beta&t=ty3liNleppfKwT3UoHB-CDhfNZ4anPfJocM9A4gVerI"} name={"Mr Palash Garg"} designation={"OSD to Chancellor at Medi-Caps University"} about={"About Mr Palash Garg"} link={"https://www.linkedin.com/in/palash-garg-394195195/"}/>
        <SingleTeaMember img={"https://media.licdn.com/dms/image/C5603AQHR2TFt3o4lGw/profile-displayphoto-shrink_200_200/0/1517272135477?e=1682553600&v=beta&t=sLYUbqevHY-kFNovnX-f3ywPgHDK5AccU7DWXNH86Qs"} name={"Dr Dilip K Patnaik"} designation={"Vice Chancellor"} about={"About Dr Dilip K Patnaik"} link={"https://www.linkedin.com/in/palash-garg-394195195/"}/>
        </div>
         </div>
    </div>
  </section>
    )
}
