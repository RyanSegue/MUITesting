import { Alert, Button, Snackbar, SnackbarOrigin, Stack } from "@mui/material";
import React, { useState } from "react";

interface State extends SnackbarOrigin {
  open: boolean;
}

const SnackbarShowcase = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [customOpen, setCustomOpen] = useState<boolean>(false);

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack
      spacing={2}
      direction={"row"}
    >
      <Button
        onClick={handleClick({ vertical: "top", horizontal: "center" })}
        style={{ width: 225 }}
        variant="contained"
      >
        Open Top Middle
      </Button>
      <Button
        onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
        variant="contained"
        style={{ width: 225 }}
      >
        Open Bottom Left
      </Button>
      <Button
        onClick={handleClick({ vertical: "top", horizontal: "right" })}
        variant="contained"
        style={{ width: 225 }}
      >
        Open Top Right
      </Button>
      <Button
        onClick={() => setCustomOpen(true)}
        variant="contained"
        style={{ width: 225 }}
      >
        Open Custom
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        onClose={handleClose}
        message="Snackbar"
        autoHideDuration={2500}
      />
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        open={customOpen}
        onClose={() => setCustomOpen(false)}
        message="Snackbar"
        autoHideDuration={2500}
      >
        <Alert
          onClose={() => setCustomOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarShowcase;
