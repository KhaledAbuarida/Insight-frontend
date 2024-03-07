import React, { ChangeEvent, useState } from "react";
import { Button, ClickAwayListener, TextField } from "@mui/material";

interface SheetProps {
  name: string;
  isOpen: boolean;
  renameSheet: (oldName: string, newName: string) => void;
  removeSheet: (name: string) => void;
  openSheet: () => void;
}

const Sheet: React.FC<SheetProps> = ({
  name,
  isOpen,
  renameSheet,
  removeSheet,
  openSheet,
}) => {
  const [newName, setNewName] = useState(name);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogX, setDialogX] = useState(0);
  const [dialogY, setDialogY] = useState(0);

  const handleRename = () => {
    renameSheet(name, newName);
    setIsDialogOpen(false);
  };

  const handleRenameChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleRemove = () => {
    removeSheet(name);
    setIsDialogOpen(false);
  };

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsDialogOpen(true);
    setDialogX(event.clientX);
    setDialogY(event.clientY - 100);
  };

  return (
    <div>
      <div
        onContextMenu={handleContextMenu}
        onClick={openSheet}
        style={{
          cursor: "pointer",
          textDecoration: isOpen ? "underline" : "none",
          color: isOpen ? "red" : "black",
          userSelect: "none",
        }}
      >
        {name}
      </div>
      {/* {isOpen && <VisualizePage  />} */}
      {isDialogOpen && (
        <ClickAwayListener onClickAway={() => setIsDialogOpen(false)}>
          <div
            style={{
              position: "fixed",
              top: dialogY,
              left: dialogX,
              background: "#fff",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <form>
              <TextField onChange={(e) => handleRenameChange(e)} />
              <Button
                type="submit"
                onClick={handleRename}
              >
                Rename
              </Button>
            </form>
            <Button
              variant="contained"
              onClick={handleRemove}
            >
              Remove
            </Button>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Sheet;
