import React from 'react'
import Herosection from './herocomponents/Herosection'
import Section2 from './herocomponents/Section2'
import Section3 from './herocomponents/Section3'
import OurTeam from './herocomponents/OurTeam.jsx'
import Sectionfinal from './herocomponents/sectionfinal'
// import OurAdvisor from './OurAdvisor'
import Advisors from './herocomponents/Advisors'
import Testimonials from './Testimonials'
import Diamond from './herocomponents/Diamond/Diamond.jsx'
import Sponsors from './Sponsors'
import AnimationSection from './Animation/AnimationSection'
export default function Home() {
  return (
    <div st>
      <Herosection/>
      <Section2/>
      {/* <Section3/> */}
      {/* <Sectionfinal/> */}
      {/* <OurTeam/> */}
      {/* <OurAdvisor/> */}
      <AnimationSection/>
    {/* <Advisors/> */}
      {/* <OurTeam/> */}
    {/* <Diamond/> */}
    <Sponsors/>
      <Testimonials/>
    </div>
  )
}
