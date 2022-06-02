import React from 'react'
import WindowDimensions from '../../WindowDimension'

import HeadCurve from '../Landpage/HeadCurve'
import '../styles/Navbar.scss'
import NavbarChild from './NavbarChild'


function NavBar() {
    const [scrollLand, setScrollLand] = React.useState("")

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setScrollLand("navbar-height")
            } else {
                setScrollLand("")
            }
        })
    }, [])

    return (
        <>
            
                <HeadCurve />
                <nav className={`${scrollLand} navbar navbar navbar-expand-lg navbar-light rounded`}>

                    <NavbarChild toggleChange={scrollLand} />

                </nav>
            
        </>
    )
}

export default NavBar
