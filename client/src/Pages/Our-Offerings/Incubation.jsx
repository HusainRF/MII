import React from 'react'
import SingleIncubation from './SingleIncubation'

export default function Incubation() {
  return (
    <div className='zl-staff -inverse '>
    <div className='container' style={{fontSize:"160%"}}>
       <h1  style={{fontSize:"100px",paddingTop:"60px"}} >Incubation</h1>
      <div   style={{display:"flex", flexWrap:"wrap"}}>
        <SingleIncubation title={"Mentoring"} content={"Receive guidance and support from experienced professionals."}/>
        <SingleIncubation title={"Seed-Fund Investment"} content={"Get access to seed-fund investment to help grow your business."}/>
        <SingleIncubation title={"Access to Eventsring"} content={"Attend events and network with other entrepreneurs."}/>
        <SingleIncubation title={"Co-working"} content={"Work in a collaborative environment with other start-ups."}/>
        <SingleIncubation title={"HR Access"} content={"Connect with human resources professionals to help with hiring and HR needs."}/>
        <SingleIncubation title={"Interns"} content={"Hire interns to help with your business operations."}/>
        <SingleIncubation title={"Research Support"} content={"Receive support with research and market analysis."}/>
        <SingleIncubation title={"Business Plan Development"} content={" Get assistance with developing a solid business plan."}/>
        </div>
    </div>
    </div>
  )
}
