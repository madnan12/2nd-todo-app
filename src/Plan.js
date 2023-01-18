import React from 'react'

const Plan = (props) => {
  return ( 
    <div>
        <div className="cotainer">
            <div className="row">
                <div className="col-9">
                <li className='shadow p-2 my-2'>{props.value}</li>
                </div>
                <div className="col-3">
                <button className='btn btn-danger my-2' onClick={()=>props.handleDelete(props.id)}>Delete</button>
                </div>
            </div>
        </div>
     
      
      
    </div>
  )
}

export default Plan
