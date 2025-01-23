import React from "react";

import { Drawer as MuiDrawer } from "@mui/material";

import Button from "components/buttons/Button";
import { buttonTypes } from "components/buttons/constants/buttonTypes";
import { IDrawer } from "components/drawers/interfaces";
import { useDrawerStyles } from "components/drawers/styles";
import LoadingComponent from "components/loading/LoadingComponent";

const Drawer = ({
  open,
  children,
  header,
  loading,
  handleClose,
  onSave,
}: IDrawer): React.ReactElement => {
  const classes = useDrawerStyles();

  return (
    <MuiDrawer
      classes={{ root: classes.root }}
      PaperProps={{
        style: { width: "30%", padding: "70px 30px" },
      }}
      anchor='right'
      open={open}
      onClose={handleClose}>
      <h3 className={classes.header}>{header}</h3>
      {children}

      <div className={classes.buttonsContainer}>
        <Button
          buttonType={buttonTypes.warning}
          onClick={onSave}
          variant='contained'
          className={classes.button}>
          Save
        </Button>
      </div>
      {loading ? <LoadingComponent /> : null}
    </MuiDrawer>
  );
};

export default Drawer;
