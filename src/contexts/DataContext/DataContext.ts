import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any | null;
  dataId: number | null;
  numericalHeaders: any[] | null;
  columnPicker: string;
  rowPicker: string;
  categoricalHeaders: any[] | null;
  isDataUploaded: boolean;
  fileTitle: string | null;
  dataType: string | null;
  availableGraphs: string[];
  addDataType: (type: string) => void;
  addColumnPicker: (column: string) => void;
  addRowPicker: (row: string) => void;
  addFileTitle: (file: any) => void;
  deleteFile: () => void;
  addData: (data: any, dataId: number) => void;
  addHeaders: (num_data: any[], cat_data: any[]) => void;
  addAvailableGraphs: (list: string[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: null,
  dataId: null,
  columnPicker: "",
  rowPicker: "",
  numericalHeaders: null,
  categoricalHeaders: null,
  isDataUploaded: false,
  fileTitle: null,
  dataType: null,
  availableGraphs: [],
  addDataType: () => {},
  addColumnPicker: () => {},
  addRowPicker: () => {},
  addFileTitle: () => {},
  deleteFile: () => {},
  addData: () => {},
  addHeaders: () => {},
  addAvailableGraphs: () => {},
});

export const useData = () => useContext(DataContext);
