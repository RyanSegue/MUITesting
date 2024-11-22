import { Box } from "@mui/system";
import React from "react";

const Header = () => {
    return (
        <>
            <Box sx={{backgroundColor: 'blue', display:'flex', flexDirection: 'row', height: '100%'}}>
                <Box sx={{padding: '25px'}}>(Burger Icon)</Box>
                <Box sx={{padding: '25px'}}>(Segue Logo)</Box>
                <Box sx={{ padding: '25px', alignSelf: 'flex-end'}}>(Home/Logout Icon)</Box>
            </Box>
        </>
    )
}

export default Header;