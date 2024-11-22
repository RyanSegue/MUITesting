import PATHS from '../Navigation/Paths';
import { bookingsIcon, contractsIcon, marketingIcon, projectManagementIcon, systemAdminIcon } from './Icons';

interface PanelDate {
    text: string,
    color: string,
    icon: JSX.Element,
    path: string,
}

export const DashboardPanelData: PanelDate[] = [
    { text: 'Bookings', color: '#d11d38', icon: bookingsIcon(), path: PATHS.Bookings},
    { text: 'Marketing', color: '#27a36d', icon: marketingIcon(), path: PATHS.Marketing},
    { text: 'Project Managment', color: '#e3d368', icon: projectManagementIcon(),path: PATHS.ProjectManagment},
    { text: 'Contracts', color: '#467cc2', icon: contractsIcon(), path: PATHS.Contracts},
    { text: 'System Admin', color: '#cf3269', icon: systemAdminIcon(), path: PATHS.SystemAdmin},
]