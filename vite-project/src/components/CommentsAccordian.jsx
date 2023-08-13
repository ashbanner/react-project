import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CommentIcon from "@mui/icons-material/Comment";

function CommentsAccordian({ comments }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Comments</Typography>
        <Badge badgeContent={comments.length} color="primary">
          <CommentIcon color="action" />
        </Badge>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {comments?.map((comment) => (
            <ListItem disablePadding key={comment.id}>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary={comment.comment} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default CommentsAccordian;
