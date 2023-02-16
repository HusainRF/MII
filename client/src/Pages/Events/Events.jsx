import React from 'react'
import './Events.css'
import './EventComponent'
import EventComponent from './EventComponent'
export default function Events() {
  return (
    
    <div className='container '>
      <div className=''>
      <h1 className='text-center effect'>Upcoming Events</h1>
      <div className='d-flex row justify-content-center'>
        
<EventComponent/>
{/* <EventComponent/> */}
{/* <EventComponent/> */}


        

      </div>
      {/* <p className='text-danger slide-fwd-top '>hello world</p> */}
      </div>
      <div className=''>
      <h1 className='text-center effect'>Past Events</h1>
      
      </div>

    </div>
    
  )
}
