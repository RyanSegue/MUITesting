import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const TextInputShowcase = () => {
  const [value, setValue] = useState<string>("Text");

  const handleChange = (e: { target: { value: any; name: string } }) => {
    setValue(e.target.value);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"flex-start"}
      spacing={2}
    >
      <div>
        <Typography style={{ textAlign: "left" }}>Filled</Typography>
        <TextField
          variant="filled"
          style={{ backgroundColor: "white", width: 250 }}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <Typography style={{ textAlign: "left" }}>Outlined</Typography>
        <TextField
          variant="outlined"
          style={{ backgroundColor: "white", width: 250 }}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <Typography style={{ textAlign: "left" }}>Standard</Typography>
        <TextField
          variant="standard"
          style={{ backgroundColor: "white", width: 250 }}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};

export default TextInputShowcase;
