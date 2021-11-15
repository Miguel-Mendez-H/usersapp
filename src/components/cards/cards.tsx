import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import "./cards.css";

import ModalUsers from "../modal/modal";

import GetUsers from "../../services/usersService";


const cardImage ='https://images.unsplash.com/photo-1634492599187-b89b0dfd1e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard() {
  let users = GetUsers();

  return users.map((user: any) => (
    <div className="singleCard">
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          height="140"
          image = {cardImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>Name:</b> {user.name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Username:</b> {user.username}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Email:</b> {user.email}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Phone:</b> {user.phone}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Website:</b> {user.website}
          </Typography>
        </CardContent>

        <CardActions>
          <ModalUsers>{user}</ModalUsers>
        </CardActions>
      </Card>
    </div>
  ));
}
