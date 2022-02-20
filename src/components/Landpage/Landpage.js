import React from 'react'
import '../styles/landpage.scss'

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
                        <div className="heading-image">
                            <img src={process.env.PUBLIC_URL + '/assets/SectionA/A.png'}
                                className="heading-image img-responsive img-fluid" />
                            <div className="stage"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landpage


