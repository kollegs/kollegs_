import React from 'react'
import Landpage from './components/Landpage/Landpage'
import Process from './components/process/Process'
import Service from './components/services/Service'
import ProjectMain from './components/Projects/ProjectMain'
import Payment from './components/Payments/Payment'
import Faqs from './components/faqs/Faqs'
import Offers from './components/Reviews/ReviewMain'

function Home() {
    return (
        <div>
            <Landpage />
            <Offers />
            <Service />
            <ProjectMain />
            <Process />
            <Payment />
            <Faqs />
            
        </div>
    )
}

export default Home