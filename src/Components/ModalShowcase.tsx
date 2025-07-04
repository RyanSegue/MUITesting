import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  Stack,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalShowcase = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Stack
        direction={"row"}
        gap={2}
      >
        <Button
          variant="contained"
          sx={{ width: 225 }}
          onClick={() => setDialogOpen(true)}
        >
          Open Dialog
        </Button>
        <Button
          variant="contained"
          sx={{ width: 225 }}
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </Button>
      </Stack>
      <Dialog open={dialogOpen}>
        <DialogTitle>THIS IS THE TITLE</DialogTitle>
        <DialogContent>SOME CONTEXT IN HERE</DialogContent>
        <DialogActions>
          <Button onClick={() => alert("Doesn't do much")}>Action</Button>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Box sx={style}>Bunch of custom stuff</Box>
      </Modal>
    </div>
  );
};

export default ModalShowcase;
