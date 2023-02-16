import React from 'react'

export default function Knowmore() {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center'> Event Name</h1>
                <div className='row justify-content-center d-flex'>
                    <img className='col-12' src='/images/singleEvent.jpeg' />
                </div>
                <div className='d-flex row mt-4 justify-content-center'>
                    <h1 className='text-center'>About The Event </h1>
                    <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <h4>Date :</h4>
                    <h4>Time :</h4>
                    <h4 >Venue:</h4>
                    <button className='col-2 btn btn-primary  m-2'>Register</button>

                </div>
            </div>

        </div>
    )
}
