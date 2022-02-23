import React from 'react'
import MiddleProcess from './MiddleProcess'
import "../styles/process.scss"
function Process() {
  return (
    <div className='row col-lg-12' style={{margin: "0px", padding: "0px"}} >
        <img src={process.env.PUBLIC_URL + "/assets/process/right.png"}  className="process-image img-responsive img-fluid col-lg-3 col-sm-3 col-3 col-md-3" />
        <MiddleProcess />
        <img src={process.env.PUBLIC_URL + "/assets/process/left.png"}  className="process-image img-responsive img-fluid col-lg-3 col-sm-3 col-3 col-md-3" />
    </div>
  )
}

export default Process