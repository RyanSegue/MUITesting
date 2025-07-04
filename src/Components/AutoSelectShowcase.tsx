import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AutoSelectShowcase = () => {
  const options = ["Apple", "Orange", "Pear", "Banana", "Peach"];

  const [auto1, setAuto1] = useState<string | null>(null);
  const [auto2, setAuto2] = useState<string | null>(null);

  return (
    <div>
      <Stack
        direction={"row"}
        spacing={2}
      >
        <div>
          <Typography style={{ textAlign: "left" }}>Standard</Typography>
          <Autocomplete
            disablePortal
            options={options}
            onChange={(_, e: string | null) => setAuto1(e)}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => <TextField {...params} />}
            value={auto1}
          />
          <Typography>{`Value: ${auto1}`}</Typography>
        </div>
        <div>
          <Typography style={{ textAlign: "left" }}>Free Solo</Typography>
          <Autocomplete
            disablePortal
            options={options}
            onChange={(_, e: string | null) => setAuto2(e)}
            onInputChange={(_, e) => setAuto2(e)}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => <TextField {...params} />}
            value={auto2}
          />
          <Typography>{`Value: ${auto2}`}</Typography>
        </div>
      </Stack>
    </div>
  );
};

export default AutoSelectShowcase;
