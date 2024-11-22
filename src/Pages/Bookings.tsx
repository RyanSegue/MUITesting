import React from "react";
import { BookingTableItem } from "../Types/BookingTypes";
import BookingsTable from "../Components/Bookings/BookingsTable";

const BookingsPage = () => {   
    const data: BookingTableItem[] = [
        {
            id: 1,
            production: 'Prod1',
            date: 'Date1',
            week: 1,
            venueDetails: 'ven1',
            town: 'town1',
            dayType: 'dayType1',
            bookingStatus: 'status1',
            capacity: 1,
            noPerformances: 1,
            performanceTimes: 'pt1',
            miles: 1,
            travelTime: 1,
        },
        {
            id: 2,
            production: 'Prod2',
            date: 'Date2',
            week: 2,
            venueDetails: 'ven2',
            town: 'town2',
            dayType: 'dayType2',
            bookingStatus: 'bookingStatus2',
            capacity: 2,
            noPerformances: 2,
            performanceTimes: 'pt2',
            miles: 2,
            travelTime: 2,
        },
    ] 
    return <BookingsTable data={data}/>
}

export default BookingsPage;