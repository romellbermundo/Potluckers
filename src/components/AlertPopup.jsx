import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertPopup({
  open,
  setOpen,
  rows,
  setRows,
  activeId,
  setActiveId,
}) {
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (message) => {
    if (message === "yes") {
      await setRows(rows.filter((row) => row.id !== activeId));
      setActiveId(null);
    } else if (message === "no") {
      setActiveId(null);
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Current Row!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to delete this row?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("no")}>Cancel</Button>
          <Button onClick={() => handleClose("yes")} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
