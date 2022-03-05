import React from 'react'

import { List } from 'bootstrap-4-react/lib/components';
import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import config from '../../services/config';

function PaymentCondition() {
    const [conditionData, setConditionData] = React.useState(config.paymentsData)

    return (
        <List>
            {conditionData.map(condition => {
                return <ListItem style={{marginTop: "10px"}}>
                    <ListItemAvatar className='list-item-icon'>
                        {condition.avatar}
                    </ListItemAvatar>
                    <ListItemText
                        primary={condition.title}
                        secondary={condition.subtitle}
                        primaryTypographyProps={{
                            fontSize: "24px",
                            color: "#5d5777",
                            fontWeight: "bold",
                            fontFamily: "'Open Sans', sans-serif"
                        }}
                        secondaryTypographyProps={{
                            fontSize: "15px",
                            color: "#9f9cab",
                            fontWeight: "bold",
                            fontFamily: "'Open Sans', sans-serif",
                            marginTop: "10px"
                        }}
                    />
                </ListItem>
            })}
        </List>
    )
}

export default PaymentCondition