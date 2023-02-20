import React from 'react'

export default function SingleIncubation(props) {
  return (
    <div class="card mx-4 my-4"  style={{backgroundColor:"#0f0f0f",width:"18rem"}}>
  <div class="card-body">
  <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
  </div>
</div>
  )
}
