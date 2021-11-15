import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import "./cards.css";
import ModalUsers from "../modal/modal";
import getUsers from "../../services/usersService";
import { cardImage } from "../../assets/assets";
import UserType from '../../services/userType'


export default function BasicCard() {
  let [users, setUsers] = useState([]);

  useEffect(function () {
    getUsers().then((users) => setUsers(users));
  }, []);

  return users.map((user: UserType, index) => (
    <div className="singleCard" key={index} >
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          height="140"
          image={cardImage}
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
          <ModalUsers user={user}></ModalUsers>
        </CardActions>
      </Card>
    </div>
  ));
}
