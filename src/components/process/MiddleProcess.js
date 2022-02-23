import React from 'react'
import Tab from '@mui/material/Tab';
import { TabContext } from '@material-ui/lab';
import { TabList } from '@material-ui/lab';
import { TabPanel } from '@material-ui/lab';
import Box from '@mui/material/Box';
import "../styles/process.scss"
import { makeStyles } from '@mui/styles';
import config from "../../services/config"

const useStyles = makeStyles({
    tabs: {
        '&.Mui-selected': {
            color: 'red',
            backgroundColor: 'orange'
        }
    }
})

function MiddleProcess() {
    const classes = useStyles();
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const style = {
        height: "50px",
        width: "30px",
        borderRadius: "50%",
        minWidth: "50px",
        marginBottom: "3%",
        backgroundColor: "gray",
        border: "1px solid gray",
        color: "white",
        fontSize: "15px",
        marginLeft: "5%",
        marginRight: "5%"
    }

    const styleOnSelected = {
        height: "50px",
        width: "30px",
        borderRadius: "50%",
        minWidth: "50px",
        marginBottom: "3%",
        backgroundColor: "#ff5488",
        border: "1px solid #ff5488",
        color: "white",
        fontSize: "15px",
        marginLeft: "5%",
        marginRight: "5%"
    }

    const [processData, setProcessData] = React.useState(config.processData)

    return (
        <div className='col-lg-6 col-md-6 col-12 col-sm-12' style={{ justifyContent: "center", alignItems: "center" }}>
            <h1 className="process-heading">What Happens Next?</h1>
            <h5 className='process-desc'>Our process for delivering homework help service is simple.</h5>
            <Box sx={{ width: '100%' }} style={{ marginTop: "10%" }}>
                <TabContext value={value} className="process-tab-context" >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} centered >
                            {processData.map(process => <Tab label={process.value}
                                value={process.value}
                                style={value === process.value ? styleOnSelected : style}
                                className={classes.tabs} />)
                            }
                        </TabList>
                    </Box>
                    {processData.map(pro => {
                        return <TabPanel value={pro.value} style={{ textAlign: "center" }} >
                            <img src={process.env.PUBLIC_URL + pro.imageUrl} className="project-image img-responsive img-fluid" />
                            <h5 className='process-title' style={{ textTransform: "uppercase", color: "#ff5488", fontSize: "23px", fontWeight: "500" }}>
                                {pro.title}
                            </h5>
                            <p className='process-description'> {pro.description} </p>
                        </TabPanel>
                    })}

                </TabContext>
            </Box>
        </div>
    )
}

export default MiddleProcess