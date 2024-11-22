import { GridColDef } from "@mui/x-data-grid";

export const bookingColumnDefs: GridColDef[] = [
    {
        field: 'production', 
        headerName: 'Production', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'date', 
        headerName: 'Date', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'week', 
        headerName: 'Wk', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'venueDetails', 
        headerName: 'Venue Details', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'town', 
        headerName: 'Town', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'dayType', 
        headerName: 'Day Type', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'bookingStatus', 
        headerName: 'Booking Status', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'capacity', 
        headerName: 'Capacity', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'noPerformances', 
        headerName: 'No. Perf', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'performanceTimes', 
        headerName: 'Perf times', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'miles', 
        headerName: 'Miles', 
        width: 150,
        headerClassName: 'header'
    },
    {
        field: 'travelTime', 
        headerName: 'Travel time', 
        width: 150,
        headerClassName: 'header'
    },

]