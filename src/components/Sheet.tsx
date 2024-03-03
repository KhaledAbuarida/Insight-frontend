import { useState } from "react";
import Graph from "./Graph";

interface Props {
  name: string;
  isOpen: boolean;
  renameSheet: (oldName: string, newName: string) => void;
  removeSheet: (name: string) => void;
  openSheet: () => void;
}

// Component for a single sheet
const Sheet = ({
  name,
  isOpen,
  renameSheet,
  removeSheet,
  openSheet,
}: Props) => {
  const [newName, setNewName] = useState(name);

  const handleRename = () => {
    renameSheet(name, newName);
  };

  return (
    <div>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleRename}>Rename</button>
      <button onClick={() => removeSheet(name)}>Remove</button>
      <button onClick={openSheet}>Open</button>
      {isOpen && <Graph />}
    </div>
  );
};

export default Sheet;
