import React from 'react'
import Advisors from '../Home/herocomponents/Advisors'
import OurTeam from '../Home/herocomponents/OurTeam'
import AboutHero from './AboutHero'
import Testimonial from './Testimonial'

export default function About() {
  return (
    <div>
        <AboutHero/>
        <OurTeam/>
        <Advisors/>
        {/* <Testimonials/> */}
        <Testimonial/>
    </div>
  )
}
