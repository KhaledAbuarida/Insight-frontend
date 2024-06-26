import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any | null;
  headers: any[] | null;
  isDataUploaded: boolean;
  file: File | null;
  dataType: string;
  addDataType: (type: string) => void;
  uploadFile: (file: File) => void;
  deleteFile: () => void;
  addData: (data: any) => void;
  addHeaders: (data: any[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: null,
  headers: null,
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
