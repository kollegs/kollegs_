import React from 'react'
import AboutUs from '../../src/animation/19417-no-place-like-home-flight.json'
import Lottie from "lottie-react";
import './styles/aboutUs.scss'
import Footer from './Footer/Footer';

function About() {
    let aboutUsGif = require("../gifs/50574-aboutus-unscreen.gif")
    console.log("About Page Rendered")
    return (
        <>
            <div className='about-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5'>
                            <h1 className='aboutUs-heading'>A Bunch of Experts</h1>
                            <p className='aboutUs-content'>
                                Early on in our history, we made a point of hiring only the most talented, knowledgeable, and punctual people.
                                 With 500+ degree-holding experts in our pool, we now have enough brainpower to solve any problem your school has
                                  to offer. This is not a hobby for us. But nor is it a 9-to-5 job. It's a vocation. That means three things: 
                                  helping you makes us happy; the only schedule we adhere to is your schedule; we hold ourselves to a high standard
                                   so you can expect it.
                            </p>
                        </div>
                        <div className='col-lg-7 gif-section'>
                        <Lottie animationData={AboutUs} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About



