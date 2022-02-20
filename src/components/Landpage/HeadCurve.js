import React from 'react'
import '../styles/landpage.scss'

function HeadCurve() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="500" viewBox="0 0 1500 500" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(45)">
                        <stop offset="5%" stop-color="#ff5488" />
                        <stop offset="95%" stop-color="#ff5488" />
                    </linearGradient>
                </defs>
                <path d="M 0,0
         L 0,250
         Q 750,500 1500,250
         L 1500, 0
         Z" fill="url('#myGradient')" />
            </svg>
        </>
    )
}

export default HeadCurve
