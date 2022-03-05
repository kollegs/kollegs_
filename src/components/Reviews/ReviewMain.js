import React from 'react'
import ReviewCarousel from './ReviewCarousel'
import "../styles/review.scss"

function ReviewMain() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className="review-heading">Your Peers Got An Edge</h1>
                    <h5 className='review-desc'>Your classmates may already have an advantage over you – just because they are getting online homework help, and you still aren't.</h5>
                    <ReviewCarousel />
                </div>
                <div className='col-lg-6'>
                <img src={process.env.PUBLIC_URL + "/assets/review/review-main.svg"}  className="process-image img-responsive img-fluid col-lg-12 col-sm-12 col-12 col-md-12" />
                </div>
            </div>
        </div>
    )
}

export default ReviewMain