import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

interface Props {
    title: string,
    color: string,
    icon: JSX.Element,
    path: string,
}

const DashboardPanel = (props: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.path);
    }

    return (
        <Button sx={{
            backgroundColor: props.color, 
            height: 250, 
            width: '100%', 
            display: 'flex',
            justifyItems: 'center', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: 10,
        }} onClick={handleClick}>
            <Box sx={{width: '25%', height: '25%', padding: '25px', color: 'white'}}>{props.icon}</Box>
            <Typography sx={{fontSize: '25px', color: 'white', width: '100%', height: '20%'}}>{props.title}</Typography>
        </Button>
    )
}

export default DashboardPanel;