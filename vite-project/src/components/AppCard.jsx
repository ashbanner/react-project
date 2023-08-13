import React from "react";
import { Card, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "./Avatar";

function AppCard({
  firstName,
  lastName,
  imageUrl,
  onDeleteButtonClick,
  onViewDetailsButtonClick,
}) {
  const handleDeleteClick = () => {
    onDeleteButtonClick();
  };

  const handleViewDetailsClick = () => {
    onViewDetailsButtonClick();
  };

  return (
    <Card>
      <Avatar imageUrl={imageUrl} />
      <p>{`${firstName} ${lastName}`}</p>
      <Button variant="contained" onClick={handleViewDetailsClick}>
        <Typography variant="button">See Details</Typography>
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteClick}
      >
        <Typography variant="button">Delete</Typography>
      </Button>
    </Card>
  );
}

export default AppCard;
