import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function SheetDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Sheet</DialogTitle>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleRename}>Rename</button>
      <button onClick={() => removeSheet(name)}>Remove</button>
    </Dialog>
  );
}
