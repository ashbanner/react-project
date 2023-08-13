import React from "react";
import { Avatar as MaterialUIAvatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Avatar = ({ imageUrl }) => {
  const avatarContent = imageUrl ? (
    <MaterialUIAvatar src={imageUrl} />
  ) : (
    <MaterialUIAvatar>
      <PersonIcon />
    </MaterialUIAvatar>
  );

  return avatarContent;
};

export default Avatar;
