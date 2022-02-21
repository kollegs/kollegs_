import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@material-ui/lab';
import { TabList } from '@material-ui/lab';
import { TabPanel } from '@material-ui/lab';
import config from "../../services/config"
export default function ServiceProject() {
    const [value, setValue] = React.useState("1")
    const [selected, setSelected] = React.useState("1")
    const [services, setServices] = React.useState(config.services)
    console.log(services)
    function handleChange(event, newValue) {
        setValue(newValue)
        setSelected(newValue)
    }

    const tabStyle = {
        margin: "20px",
        padding: "50px 40px",
        display: "inline-block",
        color: "black",
        fontWeight: "bold",
        zIndex: "100",
        fontSize: "20px",
        textAlign: " center",
        textTransform: "capitalize"
    }

    const tabStyle2 = {
        color: "black",
        fontWeight: "bold",
        zIndex: "100",
        fontSize: "20px",
        textAlign: " center"
    }

    return (
        <div className='service-options'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value} className="tab-context">
                    <TabList className='tab-list' style={{marginTop: "1%"}} onChange={handleChange} aria-label="lab API tabs example" centered>
                        {selected === "1" ?
                            <div className='service-tab'>
                                <img className="tab-image" src='https://assignmentgeek.com/theme/0.loc/img/images/service-list-1.svg' />
                                <Tab style={tabStyle} label="Content Writing" value="1" />
                            </div>
                            :
                            <Tab label="Content Writing" value="1" className='tab-label' />
                        }
                        {selected === "2" ?
                            <div className='service-tab'>
                                <img className="tab-image" src='https://assignmentgeek.com/theme/0.loc/img/images/service-list-2.svg' />
                                <Tab style={tabStyle} className='tab-option' label="Essay Writing" value="2" />
                            </div>
                            :
                            <Tab label="Essay Writing" value="2" className='tab-label' />
                        }

                        {selected === "3" ?
                            <div className='service-tab'>
                                <img className="tab-image" src='https://assignmentgeek.com/theme/0.loc/img/images/service-list-3.svg' />
                                <Tab className='tab-option' label="Powerpoint" value="3" />
                            </div> :
                            <Tab label="Presentations" value="3" className='tab-label' />
                        }
                        {selected === "4" ?
                            <div className='service-tab'>
                                <img className="tab-image" src='https://assignmentgeek.com/theme/0.loc/img/images/service-list-4.svg' />
                                <Tab className='tab-option' label="Development" value="4" />
                            </div> :
                            <Tab label="Development" value="4" className='tab-label' />
                        }
                    </TabList>

                    {services.map(item => {
                        console.log("item", typeof(item.id))
                        return <TabPanel value={item.id.toString()} className='tab-panel'>
                            <h5 className='tab-panel-title'> {item.title} </h5>
                            <p className='tab-panel-description'> {item.description} </p>
                        </TabPanel>
                    })}

                </TabContext>
            </Box>
        </div>
    );
}
