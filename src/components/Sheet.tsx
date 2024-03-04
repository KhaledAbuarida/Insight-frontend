import React, { ChangeEvent, useState } from "react";
import Graph from "./Graph";
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
    setDialogY(event.clientY);
  };

  return (
    <div>
      <div
        onContextMenu={handleContextMenu}
        onClick={openSheet}
        style={{
          cursor: "pointer",
          textDecoration: isOpen ? "underline" : "none",
        }}
      >
        {name}
      </div>
      {isOpen && <Graph />}
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
              <Button onClick={handleRename}>Rename</Button>
            </form>
            <button onClick={handleRemove}>Remove</button>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Sheet;
