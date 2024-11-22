import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import React from 'react';

export const bookingsIcon = () => {
    return <CalendarMonthOutlinedIcon sx={{width: '100%', height: '100%'}}/>
}

export const marketingIcon = () => {
    return <CampaignOutlinedIcon sx={{width: '100%', height: '100%'}}/>
}

export const projectManagementIcon = () => {
    return <CheckBoxOutlinedIcon sx={{width: '100%', height: '100%'}}/>
}

export const contractsIcon = () => {
    return <InsertDriveFileOutlinedIcon sx={{width: '100%', height: '100%'}}/>
}

export const systemAdminIcon = () => {
    return <AdminPanelSettingsOutlinedIcon sx={{width: '100%', height: '100%'}}/>
}