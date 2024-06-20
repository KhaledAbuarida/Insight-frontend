import { createContext, useContext } from "react";

// Define the context type
interface DataContextType {
  data: any[];
  headers: any[];
  addData: (data: any[]) => void;
  addHeaders: (data: any[]) => void;
}

// Create the context
export const DataContext = createContext<DataContextType>({
  data: [],
  headers: [],
  addData: () => {},
  addHeaders: () => {},
});

export const useData = () => useContext(DataContext);
