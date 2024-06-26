import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any[] | null;
  headers: any[];
  isDataUploaded: boolean;
  file: File | null;
  uploadFile: (file: File) => void;
  deleteFile: () => void;
  addData: (data: any[]) => void;
  addHeaders: (data: any[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: null,
  headers: [],
  isDataUploaded: false,
  file: null,
  uploadFile: () => {},
  deleteFile: () => {},
  addData: () => {},
  addHeaders: () => {},
});

export const useData = () => useContext(DataContext);
