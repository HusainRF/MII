import React from 'react'
import SponsorCarousel from './SponsorCarousel'
import './herocomponents/SectionFinal.css'
import { NavLink } from 'react-router-dom'

export default function Sponsors() {
    return (
        <div className='container-fluid p-5' style={{ backgroundColor: "#0F0F0F" }}>

            <div className='container ms-4 '  >
                {/* Content 1 */}
                <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "white" }}>From Concept <br></br>to Wide Adoption</h1>
            </div>

            {/* carousel */}
            <div className='my-5'>
                <SponsorCarousel />
            </div>
            {/* Content2 */}

            <div className='container my-2'>

            </div>

            {/* Read More button */}
            <div className=' ms-4'>
                <p style={{ fontSize: "30px", fontWeight: "800" ,color:"white"}}>ZenX is a full-scale incubator that prepares decentralized innovation for global use. To prepare the project for wide adoption, we assure full compliance, set up collaborations with global financial institutions, investment funds, governments. ZenX is a space where highly practical ideas that could potentially impact millions (or better, billions) receive the support they deserve.</p>
            </div>
            <div >
                <NavLink to='/ourofferings' className='abc'><button className='pqr'>Read More</button></NavLink>
            </div>
        </div>
    )
}
