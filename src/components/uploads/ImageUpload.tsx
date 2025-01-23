import React from "react";

import { Avatar } from "@mui/material";

import { useImageUpload } from "components/uploads/hooks/useImageUpload";
import { IImageUpload } from "components/uploads/interfaces";
import { useImageUploadStyles } from "components/uploads/styles";

const ImageUpload = ({ value, onChange }: IImageUpload): React.ReactElement => {
  const classes = useImageUploadStyles();

  const { selectedImage, handleImageUpload } = useImageUpload({
    value,
    onChange,
  });

  return (
    <div>
      <Avatar
        className={classes.avatar}
        src={selectedImage}
        imgProps={{
          style: {
            objectFit: "contain",
          },
        }}
      />
      <input
        type='file'
        accept='image/*'
        onChange={(e) => {
          handleImageUpload(e.target);
        }}
        className={classes.imageInput}
      />
    </div>
  );
};

export default ImageUpload;
