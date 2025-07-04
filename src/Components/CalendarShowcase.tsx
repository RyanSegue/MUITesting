import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns";

const CalendarShowcase = () => {
  const [value, setValue] = useState<Date>(null);

  return (
    <Stack
      direction={"row"}
      gap={2}
    >
      <div>
        <Typography style={{ textAlign: "left" }}>UK</Typography>
        <DatePicker
          sx={{ backgroundColor: "white", width: 250 }}
          onChange={(e) => setValue(e)}
          value={value}
          format="dd/MM/yy"
        />
        <Typography>Value: {format(value, "dd/MM/yy HH:mm:ss")}</Typography>
      </div>
      <div>
        <Typography style={{ textAlign: "left" }}>US</Typography>
        <DatePicker
          sx={{ backgroundColor: "white", width: 250 }}
          onChange={(e) => setValue(e)}
          value={value}
          format="MM/dd/yy"
        />
        <Typography>Value: {format(value, "MM/dd/yy HH:mm:ss")}</Typography>
      </div>
    </Stack>
  );
};

export default CalendarShowcase;
