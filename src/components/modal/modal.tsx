import React, { useState } from "react";
import UserType from '../../services/userType'
import {Modal,Typography,Button,Box} from "@mui/material"

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

export default function Modaluser(props:{user:UserType}) {
  const [open, setOpen] = useState(false);
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
            Name:{props.user.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Username: {props.user.username}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Email: {props.user.email}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Phone: {props.user.phone}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Website: {props.user.website}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Address 
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Street: {props.user.address.street}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Suite: {props.user.address.suite}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            City: {props.user.address.city}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Zipcode: {props.user.address.zipcode}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
