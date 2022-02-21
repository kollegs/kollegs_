import React from 'react'
import '../styles/landpage.scss'
import Lottie from "lottie-react";
import Study from "../../animation/82662-student.json"

function Landpage() {
    return (
        <>
            <div className="section-a">
                <div className="row" style={{width:"100%"}}>
                    <div className="col-lg-6 landpage-section-a">
                        <div className="heading-section">
                            <h1 className="heading">
                                Want your Assignments to be done?
                            </h1>
                            <p className="heading-content">
                                Get true experts to do your high school or college papers. We are the only online
                                assignment writing service
                                you'll ever need.
                            </p>
                            <button className="button heading-button">
                                Work on My Assignment
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 landpage-section-b ">
                        <div className="heading-image" style={{height: "100%", width: "100%"}}>
                            {/* <img src={process.env.PUBLIC_URL + '/assets/SectionA/A.png'}
                                className="heading-image img-responsive img-fluid" />
                            <div className="stage"></div> */}
                            {/* <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_xcpxkfnu.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
                            <Lottie animationData={Study} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landpage


