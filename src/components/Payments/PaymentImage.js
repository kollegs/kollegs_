import React from 'react'
import '../styles/payment.scss'
function PaymentImage() {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/payments/paymentCurve.png"} className="payment-image img-responsive img-fluid" />
            <img src={process.env.PUBLIC_URL + "/assets/payments/payment.svg"} className="payment-image-2 img-responsive img-fluid" />
        </div>
    )
}

export default PaymentImage