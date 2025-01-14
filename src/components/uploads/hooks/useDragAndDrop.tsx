import React, { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import { HighlightOffIcon } from "assets/icons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import IconButton from "components/buttons/IconButton";
import FileTypes from "components/uploads/constants/fileTypes";
import filesData from "components/uploads/constants/fileTypesData";
import { IDragAndDrop, IUseDragAndDrop } from "components/uploads/interfaces";
import { useDragAndDropStyles } from "components/uploads/styles";

export const useDragAndDrop = ({
  multiple = false,
  fileType = {},
  onChange,
}: IDragAndDrop): IUseDragAndDrop => {
  const classes = useDragAndDropStyles();

  const [attachments, setAttachments] = useState<any[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (files) => {
      multiple
        ? setAttachments([...attachments, ...files])
        : setAttachments(files);
    },
    accept: fileType,
  });

  const handleDeleteAttachment = (id: number): void => {
    let tempAttachments = attachments;

    multiple
      ? (tempAttachments = attachments.filter((_item, index) => index !== id))
      : (tempAttachments = []);

    setAttachments(tempAttachments);
  };

  const convertFileToIcon = (
    fileName: string,
    index: number,
  ): React.ReactElement => {
    const fileType = FileTypes[fileName.split(".")[1].toUpperCase()];
    const name = fileName;

    return getIconType(
      name,
      index,
      filesData[fileType].buttonType,
      filesData[fileType].icon,
    );
  };

  const getIconType = (
    name: string,
    index: number,
    buttonType: buttonTypes,
    icon: any,
  ): React.ReactElement => {
    return (
      <React.Fragment key={index}>
        <IconButton
          className={classes.button}
          buttonType={buttonType}
          tooltipText={name}
          Icon={() => <img src={icon} alt={name} className={classes.img} />}
        />
        <HighlightOffIcon
          className={classes.deleteAttachment}
          onClick={() => handleDeleteAttachment(index)}
          sx={{ fontSize: 15 }}
        />
      </React.Fragment>
    );
  };

  useEffect(() => {
    attachments.length > 0 && onChange(attachments);
  }, [attachments]);

  return {
    classes,
    attachments,
    getRootProps,
    getInputProps,
    convertFileToIcon,
  };
};
