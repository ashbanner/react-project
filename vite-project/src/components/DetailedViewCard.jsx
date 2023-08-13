import React from "react";
import { Typography } from "@mui/material";
import Avatar from "./Avatar";
import CommentsAccordian from "./CommentsAccordian";

function DetailedViewCard({ person, comments }) {
  return (
    <div>
      <Avatar imageUrl={person.avatar} />
      <Typography variant="h4">{`${person.first_name} ${person.last_name}`}</Typography>
      <Typography variant="h6">{person.job_title}</Typography>
      <Typography variant="h6">{person.email}</Typography>
      <CommentsAccordian comments={comments} />
    </div>
  );
}

export default DetailedViewCard;
