import React from 'react'
import "../styles/project.scss"
import Presentation from "../../animation/25703-facilitate.json"
import Lottie from "lottie-react";
import config from "../../services/config"
import Content from "../../animation/71700-content-creation.json"


function ProjectMain() {
    const [projectData, setProjectData] = React.useState(config.projectData)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    function handleChange(newValue) {
        setSelectedIndex(newValue)
    }

    return (
        <div className='row col-lg-12'>
            <div className='col-lg-3 col-md-12 col-sm-12 order-md-1 order-1 order-sm-1 order-lg-1'>
                <div className='row' >
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4 ' onClick={() => handleChange(0)}>
                        <img src={process.env.PUBLIC_URL + "/assets/projects/content.webp"}  className="project-image img-fluid" />
                    </div>
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4' onClick={() => handleChange(1)}>
                    <img src={process.env.PUBLIC_URL + "/assets/projects/development.webp"} className="project-image img-fluid" />
                    </div>
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4' onClick={() => handleChange(2)}>
                        <img src={process.env.PUBLIC_URL + "/assets/projects/programming.webp"} className="project-image img-fluid" />
                    </div>
                </div>
            </div>
            <div className='col-lg-6  col-md-12 col-sm-12 middle-column order-md-3 order-3 order-sm-3 order-lg-2'>
                <div className='middle-image'>
                    <img src={process.env.PUBLIC_URL + "/assets/projects/blue3.png"} className="img-responsive img-fluid middle-image-1"/>
                    <img src={process.env.PUBLIC_URL + projectData[selectedIndex].imageUrl} style={{position: "absolute", top: "20%", right: "20%", transition: "all 0.5s ease-in-out"}} className="img-responsive img-fluid middle-image-2"/>
                </div>
                <h5 className='project-title' > {projectData[selectedIndex].title} </h5>
                <p className='project-description'> {projectData[selectedIndex].description}  </p>
                <button className='project-button'> I Want This! </button>
            </div>
            <div className='col-lg-3 col-md-12 col-sm-12 order-md-2 order-2 order-sm-2 order-lg-3'>
                <div className='row'>
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4' onClick={() => handleChange(3)}>
                        <img src={process.env.PUBLIC_URL + "/assets/projects/presentation.webp"} className="project-image img-fluid" />
                    </div>
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4' onClick={() => handleChange(4)}>
                    <img src={process.env.PUBLIC_URL + "/assets/projects/research.webp"}  className="project-image img-fluid" />
                    </div>
                    <div className='project-item col-lg-12 col-md-4 col-sm-4 col-4' onClick={() => handleChange(5)}>
                        <img src={process.env.PUBLIC_URL + "/assets/projects/papers.webp"}   className="project-image img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectMain