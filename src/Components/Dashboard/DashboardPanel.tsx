import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
    title: string,
    color: string,
    icon: JSX.Element,
}

const DashboardPanel = (props: Props) => {
    return (
        <Box sx={{
            backgroundColor: props.color, 
            height: 250, 
            width: '100%', 
            display: 'flex',
            justifyItems: 'center', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: 10,
        }}>
            <Box sx={{width: '25%', height: '25%', padding: '25px', color: 'white'}}>{props.icon}</Box>
            <Typography sx={{fontSize: '25px', color: 'white', width: '100%', height: '20%'}}>{props.title}</Typography>
        </Box>
    )
}

export default DashboardPanel;