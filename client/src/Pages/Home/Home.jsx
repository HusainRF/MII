import React from 'react'
import Herosection from './herocomponents/Herosection'
import Section2 from './herocomponents/Section2'
import Section3 from './herocomponents/Section3'
import OurTeam from './herocomponents/OurTeam.jsx'
// import OurAdvisor from './OurAdvisor'
import Advisors from './herocomponents/Advisors'
import Testimonials from './Testimonials'
import Diamond from './herocomponents/Diamond/Diamond.jsx'
export default function Home() {
  return (
    <div>
      <Herosection/>
      <Section2/>
      <Section3/>
      {/* <OurAdvisor/> */}
      
    <Advisors/>
      <OurTeam/>
    {/* <Diamond/> */}
      <Testimonials/>
    </div>
  )
}
