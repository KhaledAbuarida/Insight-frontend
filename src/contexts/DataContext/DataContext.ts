import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any | null;
  dataId: number | null;
  numericalHeaders: any[] | null;
  columnPicker: string | null;
  rowPicker: string | null;
  categoricalHeaders: any[] | null;
  isDataUploaded: boolean;
  fileTitle: string | null;
  dataType: string | null;
  addDataType: (type: string) => void;
  addColumnPicker: (column: string) => void;
  addRowPicker: (row: string) => void;
  addFileTitle: (file: any) => void;
  deleteFile: () => void;
  addData: (data: any, dataId: number) => void;
  addHeaders: (num_data: any[], cat_data: any[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: null,
  dataId: null,
  columnPicker: null,
  rowPicker: null,
  numericalHeaders: null,
  categoricalHeaders: null,
  isDataUploaded: false,
  fileTitle: null,
  dataType: null,
  addDataType: () => {},
  addColumnPicker: () => {},
  addRowPicker: () => {},
  addFileTitle: () => {},
  deleteFile: () => {},
  addData: () => {},
  addHeaders: () => {},
});

export const useData = () => useContext(DataContext);
