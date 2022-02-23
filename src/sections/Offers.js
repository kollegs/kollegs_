import React from 'react'
import config from '../services/config'
import './styles/sectionb.scss'
import Lottie from "lottie-react";
import Clock from "../animation/16226-clock-animation.json"
import Notes from "../animation/95798-page-stack.json"
import Target from "../animation/87575-man-jumping-from-target.json"
function SectionB() {
    const [offersData, setOffersData] = React.useState(config.offersList)
    return (
        <div className='sectionB'>
            <div className="col-lg-6">
                <h1 className='heading'>
                    Your Assignment Help Service in a Nutshell
                </h1>
                <p className='subtitle'>

                </p>
            </div>
            <div className='col-lg-12 row'>
                <div className='col-lg-4 offer-item'>
                    <div style={{ height: "200px", width: "200px", position: "relative", margin: "auto" }}>
                        <Lottie animationData={Clock} loop={true} />
                    </div>
                    <div>
                        <h3 className='offer-title'> {offersData[0].heading} </h3>
                        <div className='offer-underline' />
                        <p className='offer-description'> {offersData[0].subtitle} </p>
                    </div>
                </div>
                <div className='col-lg-4 offer-item'>
                    <div style={{ height: "200px", width: "200px", position: "relative", margin: "auto" }}>
                        <Lottie animationData={Notes} loop={true} />
                    </div>
                    <div>
                        <h3 className='offer-title'> {offersData[1].heading} </h3>
                        <div className='offer-underline' />
                        <p className='offer-description' > {offersData[1].subtitle} </p>
                    </div>
                </div>
                <div className='col-lg-4 offer-item'>
                    <div style={{ height: "200px", width: "200px", position: "relative", margin: "auto" }}>
                        <Lottie animationData={Target} loop={true} />
                    </div>
                    <div>
                        <h3 className='offer-title'> {offersData[2].heading} </h3>
                        <div className='offer-underline' />
                        <p className='offer-description' > {offersData[2].subtitle} </p>
                    </div>
                </div>

                {/* {offersData.map(offer => {
                    return <div className='col-lg-4 offer-item'>
                       <Lottie animationData={offer.imageUrl} />
                        <h3 className='offer-title'> {offer.heading} </h3>
                        <div className='offer-underline' />
                        <p className='offer-description' > {offer.subtitle} </p>
                    </div>
                })} */}
            </div>
            <div className='section--underline' />
        </div>
    )
}

export default SectionB
