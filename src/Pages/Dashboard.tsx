import React from "react";
import { Grid2 } from "@mui/material";
import DashboardPanel from "../Components/Dashboard/DashboardPanel";
import { DashboardPanelData } from "../Data/DashboardData";

const Dashboard = () => {
    return (
        <Grid2 container rowSpacing={2.5} columnSpacing={2.5} sx={{width: 1000}}>
            {DashboardPanelData.map((panel) => {
                return (
                    <Grid2 size={4}>
                        <DashboardPanel 
                            title={panel.text}
                            color={panel.color}
                            icon={panel.icon}
                            path={panel.path}
                        />
                    </Grid2>
                )
            })} 
        </Grid2>
    )
}

export default Dashboard;