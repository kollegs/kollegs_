import React from 'react'
import Landpage from './components/Landpage/Landpage'
import Process from './components/process/Process'
import Service from './components/services/Service'
import ProjectMain from './components/Projects/ProjectMain'
import Payment from './components/Payments/Payment'
import Faqs from './components/faqs/Faqs'
import SectionB from './sections/Offers'


function Home() {
    return (
        <div>
            <Landpage />
            <SectionB />
            <Service />
            <ProjectMain />
            <Process />
            <Payment />
            <Faqs />
            
        </div>
    )
}

export default Home