import { createStyles, makeStyles } from "@mui/styles";

export const useInputsStructureStyles = makeStyles(() =>
  createStyles({
    block: {
      display: "block",
    },
    flex: {
      display: "flex",
      flexWrap: "wrap",
      padding: "10px",
    },
    element: {
      padding: "10px 0px",
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  }),
);
