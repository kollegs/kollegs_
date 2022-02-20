import React from 'react'
import '../styles/service.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ServiceProject from './ServiceProject';
function Service() {
  const [open, setOpen] = React.useState(false)
  function handleOpen() {
    setOpen(prevState => !prevState)
  }

  return (
    <div className='container'>
      <div className="landing-heading">
        <div className='section--underline' />
        <h3 onClick={handleOpen} >INSTANT SUCCESS WITH
          <span className='heading-hover'> ANY PROJECT </span>
          <KeyboardArrowDownIcon style={{ height: "50px", width: "50px", padding: "5px" }} />
        </h3>
        {open && <ServiceProject />}
        <div className='section--underline' />
      </div>
    </div>
  )
}

export default Service