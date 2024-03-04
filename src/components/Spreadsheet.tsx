import React, { useState } from "react";
import Sheet from "./Sheet";

const Spreadsheet: React.FC = () => {
  const [sheets, setSheets] = useState<{ name: string; isOpen: boolean }[]>([
    { name: "Sheet 1", isOpen: false },
    { name: "Sheet 2", isOpen: false },
    { name: "Sheet 3", isOpen: false },
  ]);
  const [currentSheet, setCurrentSheet] = useState<string | null>(null);

  const addSheet = () => {
    const newSheetName = `Sheet ${sheets.length + 1}`;
    setSheets([...sheets, { name: newSheetName, isOpen: false }]);
  };

  const renameSheet = (oldName: string, newName: string) => {
    const updatedSheets = sheets.map((sheet) =>
      sheet.name === oldName ? { ...sheet, name: newName } : sheet
    );
    setSheets(updatedSheets);
  };

  const removeSheet = (name: string) => {
    const updatedSheets = sheets.filter((sheet) => sheet.name !== name);
    setSheets(updatedSheets);
  };

  const openSheet = (name: string) => {
    setCurrentSheet(name);
    const updatedSheets = sheets.map((sheet) => ({
      ...sheet,
      isOpen: sheet.name === name,
    }));
    setSheets(updatedSheets);
  };

  return (
    <div>
      <button onClick={addSheet}>Add Sheet</button>
      {sheets.map((sheet, index) => (
        <Sheet
          key={index}
          name={sheet.name}
          isOpen={sheet.isOpen}
          renameSheet={renameSheet}
          removeSheet={removeSheet}
          openSheet={() => openSheet(sheet.name)}
        />
      ))}
      <div>
        {currentSheet && (
          <div>
            <h2>Bottom Spreadsheet</h2>
            <p>Current Sheet: {currentSheet}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spreadsheet;
