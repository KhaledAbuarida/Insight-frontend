import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any | null;
  numericalHeaders: any[] | null;
  categoricalHeaders: any[] | null;
  isDataUploaded: boolean;
  file: any | null;
  dataType: string;
  addDataType: (type: string) => void;
  uploadFile: (file: any) => void;
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
  file: null,
  dataType: "",
  addDataType: () => {},
  uploadFile: () => {},
  deleteFile: () => {},
  addData: () => {},
  addHeaders: () => {},
});

export const useData = () => useContext(DataContext);
