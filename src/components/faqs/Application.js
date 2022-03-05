import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import config from "../../services/config";
import '../styles/application.scss'
const CustomExpandIcon = () => {
    return (
        <Box
            sx={{
                ".Mui-expanded & > .collapsIconWrapper": {
                    display: "none"
                },
                ".expandIconWrapper": {
                    display: "none"
                },
                ".Mui-expanded & > .expandIconWrapper": {
                    display: "block"
                }
            }}
        >
            <div className="expandIconWrapper">-</div>
            <div className="collapsIconWrapper">+</div>
        </Box>
    );
};

export default function Application() {
    const [questions, setQuestions] = React.useState(config.questions)
    return (
        <div className="container">
            <h1 className="application-heading">Frequently Asked Questions</h1>
            <h5 className='application-desc'  style={{paddingBottom: "50px"}}>Our process for delivering homework help service is simple.</h5>
            {questions.map(item => {
                return <Accordion style={{margin: "0px 70px"}}>
                    <AccordionSummary
                        expandIcon={<CustomExpandIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{fontSize: "24px", color: "#5D5777", fontFamily: "'Open Sans', sans-serif", fontWeight: "bold"}} > {item.question} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontSize: "16px", color: "#023965", fontFamily: "'Open Sans', sans-serif"}}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    );
}
