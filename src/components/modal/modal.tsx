import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import GetUsers from "../../services/usersService";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalUsers(usersData: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name:{usersData.children.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Username: {usersData.children.username}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email: {usersData.children.email}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Phone: {usersData.children.phone}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Website: {usersData.children.website}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Address
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Street: {usersData.children.address.street}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Suite: {usersData.children.address.suite}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            City: {usersData.children.address.city}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Zipcode: {usersData.children.address.zipcode}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
