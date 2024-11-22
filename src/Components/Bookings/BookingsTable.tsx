import React from "react";
import { BookingTableItem } from "../../Types/BookingTypes";
import { StripedDataGrid } from "../../Styles/Datagrids/StripedDataGrid";
import { bookingColumnDefs } from "./Column Defs/BookingTableColumnDefs";

interface Props {
    data: BookingTableItem[],
}

const BookingsTable = (props: Props) => {
    const columnDefs = bookingColumnDefs;
    return(
        <StripedDataGrid 
            rows={props.data} 
            columns={columnDefs} 
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
            sx={{width:'100%', '& .header': {backgroundColor: 'red'}}}
        />
    )
}

export default BookingsTable;