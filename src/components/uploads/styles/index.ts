import { createStyles, makeStyles } from "@mui/styles";

import { colors } from "assets/constants/colors";

export const useDragAndDropStyles = makeStyles(() =>
  createStyles({
    attachment: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: 10,
    },
    dropzone: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.blue[900],
      borderStyle: "dashed",
      color: "rgba(2, 1, 16, 0.4)",
      outline: "none",
      transition: "border .24s ease-in-out",
      cursor: "pointer",
      fontSize: 11,
    },
    button: { margin: 5, marginTop: 0 },
    img: { width: 18 },
    deleteAttachment: {
      color: colors.red[700],
      cursor: "pointer",
      marginLeft: -5,
      marginTop: -1,
    },
  }),
);

export const useImageUploadStyles = makeStyles(() =>
  createStyles({
    imageInput: {
      opacity: 0,
      top: -65,
      left: 10,
      width: 60,
      height: 50,
      borderRadius: "50%",
      position: "relative",
      cursor: "pointer",
      float: "left",
    },
    avatar: {
      border: "1px solid orange",
      backgroundColor: "white",
      boxShadow: "0px 5px 15px rgba(5, 0, 56, 0.1)",
      margin: 5,
      width: "60px !important",
      height: "60px !important",
      padding: 4,
    },
  }),
);
