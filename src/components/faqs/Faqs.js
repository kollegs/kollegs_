import React from 'react'
import Application from './Application'

function Faqs() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <img src={process.env.PUBLIC_URL + "/assets/faq/faq-1.png"}  className="process-image img-responsive img-fluid" />
        

        <Application />
        <img src={process.env.PUBLIC_URL + "/assets/faq/faq-2.png"} className="project-image img-responsive img-fluid" />
    </div>
  )
}

export default Faqs