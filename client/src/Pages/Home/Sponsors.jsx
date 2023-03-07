import React from 'react'
import SponsorCarousel from './SponsorCarousel'
export default function Sponsors() {
    return (
        <div className='container-fluid ' >

            <div className='container' style={{textAlign:"center"}} >
                {/* Content 1 */}
                <h1 style={{fontSize:"50px",fontWeight:"bold"}}>From Concept <br></br>to Wide Adoption</h1>
            </div>

            {/* carousel */}
            <div>
                <SponsorCarousel />
            </div>
            {/* Content2 */}

            <div>

            </div>

            {/* Read More button */}
            <div>

            </div>
        </div>
    )
}
