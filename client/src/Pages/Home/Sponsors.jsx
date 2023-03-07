import React from 'react'
import SponsorCarousel from './SponsorCarousel'
export default function Sponsors() {
    return (
        <div className='container-fluid' style={{backgroundColor:"black"}}>

            <div className='container' style={{color:"white"}}>
                {/* Content 1 */}
                <h1>From Concept <br></br>to Wide Adoption</h1>
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
