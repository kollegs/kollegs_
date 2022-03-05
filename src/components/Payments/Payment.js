import React from 'react'
import PaymentCondition from './PaymentCondition'
import PaymentImage from './PaymentImage'

function Payment() {
    return (
        <div className='container' style={{paddingTop: "10%", paddingBottom: "5%"}}>
            <div className='row'>
                <div className='col-lg-6'>
                    <PaymentImage />
                </div>
                <div className='col-lg-6'>
                    <PaymentCondition />
                </div>
            </div>
        </div>
    )
}

export default Payment