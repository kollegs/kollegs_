import React from 'react'
import config from '../services/config'
import './styles/sectionb.scss'

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
                {offersData.map(offer => {
                    return <div className='col-lg-4 offer-item'>
                        <img src={offer.imageUrl} className='img-responsive img-fluid offer-img' 
                         />
                        <h3 className='offer-title'> {offer.heading} </h3>
                        <div className='offer-underline' />
                        <p className='offer-description' > {offer.subtitle} </p>
                    </div>
                })}
            </div>
            <div className='section--underline' />
        </div>
    )
}

export default SectionB
