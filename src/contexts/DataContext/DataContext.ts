import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any | null;
  numericalHeaders: any[] | null;
  categoricalHeaders: any[] | null;
  isDataUploaded: boolean;
  fileTitle: string | null;
  dataType: string;
  addDataType: (type: string) => void;
  addFileTitle: (file: any) => void;
  deleteFile: () => void;
  addData: (data: any) => void;
  addHeaders: (num_data: any[], cat_data: any[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: null,
  numericalHeaders: null,
  categoricalHeaders: null,
  isDataUploaded: false,
  fileTitle: null,
  dataType: "",
  addDataType: () => {},
  addFileTitle: () => {},
  deleteFile: () => {},
  addData: () => {},
  addHeaders: () => {},
});

export const useData = () => useContext(DataContext);
