import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

const ButtonsShowcase = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        spacing={2}
      >
        <Button
          variant="contained"
          style={{ width: 250 }}
          loading={loading}
        >
          Variant Contained
        </Button>

        <Button
          variant="outlined"
          style={{ width: 250 }}
          loading={loading}
        >
          Variant Outlined
        </Button>

        <Button
          variant="text"
          style={{ width: 250 }}
          loading={loading}
        >
          Variant Text
        </Button>
      </Stack>
      <Button
        onClick={() => setLoading(!loading)}
        variant="contained"
      >
        Set Loading
      </Button>
    </div>
  );
};

export default ButtonsShowcase;
