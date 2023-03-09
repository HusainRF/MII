import React from 'react'
import SingleAdvisor from './SingleAdviosor'

export default function Advisors() {
  return (
    
    <div>
      <div className="zl-staff-header">
              <h2>
                <div className='container'>
                  Advisors
                </div>
              </h2>
            </div>

          <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Amol Nitave"} designation={"Cheif Advisor"} about={"About Mr Amol Nitave"}/>
          <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"GK Sharma"} designation={"Cheif Advisor"} about={"About Mr GK Sharma"}/>
          <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Ram Bansal "} designation={"Cheif Advisor"} about={"About Mr Ram Bansal"}/>
    </div>
  )
}
