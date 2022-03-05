import React from 'react'
import '../styles/footer.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
    return (
        <div className='footer-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img src={process.env.PUBLIC_URL + "/assets/logo/img-logo-white.png"} className="payment-image-2 img-responsive img-fluid" />
                    </div>
                    <div className='col-lg-4'>
                        <div className='contact-item'>
                            <LocalPhoneIcon />
                            <p className='contact-detail'>+1 (888) 511-4252</p>
                        </div>
                        <div className='contact-item'>
                            <EmailIcon />
                            <p className='contact-detail'>kollegs.manager@gmail.com</p>
                        </div>
                        
                    </div>
                    <div className='col-lg-4'>
                        <h5>What we do?</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer