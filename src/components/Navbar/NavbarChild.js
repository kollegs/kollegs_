import React from 'react'
import '../styles/Navbar.scss'

function NavbarChild() {
    const [scrollLand, setScrollLand] = React.useState("")
    const [scrollLandImg, setScrollLandImg] = React.useState(false)
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
          if(window.scrollY > 500) {
                setScrollLand("nav-item-scroll")
                setScrollLandImg(true)
            } else {
                setScrollLand("")
                setScrollLandImg(false)
            }
        })
    },[])
   
    return (
        <>
            <a className="navbar-brand" href="#">
                <img className={scrollLandImg ? "logo-blue" : "logo-white"} src={scrollLandImg ? process.env.PUBLIC_URL + '/assets/logo/logo-blue.webp': process.env.PUBLIC_URL + '/assets/logo/img-logo-white.png'} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
                    <li className={`${scrollLand} nav-item`}> 
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className={`${scrollLand} nav-item`}>
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                   
                    <li className={`${scrollLand} nav-item item dropdown megamenu-li`}>
                        <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Services</a>
                        <div className="dropdown-menu megamenu mr-auto" aria-labelledby="dropdown01">
                            <div className="row">
                                <div className="col-sm-6 col-lg-4">
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li className={`${scrollLand} nav-item`}>
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul> 
            </div>
        </>
    )
}

export default NavbarChild
