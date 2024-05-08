import React, { createContext, useState, ReactNode } from "react";

// Define the context type
interface JsonContextType {
  jsonData: readonly any[]; // Use the specific interface here
  jsonHeaders: readonly any[];
  addJson: (data: any[]) => void;
  addHeaders: (data: any) => void;
}

// Create the context
export const jsonContext = createContext<JsonContextType | undefined>(
  undefined
);

// Define props for the context provider component
interface JsonContextProviderProps {
  children: ReactNode;
}

// Context provider component
export const JsonContextProvider: React.FC<JsonContextProviderProps> = ({
  children,
}) => {
  // Initialize state with null or initial data
  const [jsonData, setJsonData] = useState<readonly any[]>([]);
  const [jsonHeaders, setJsonHeaders] = useState<readonly any[]>([]);
  
  // Function to update the JSON data
  const addJson = (data: any[]) => {
    setJsonData(data);
  };

  const addHeaders = (data: any[]) => {

    const factoredData = data.map((i) => {
        const lowercaseItem = i.toLowerCase();
        return { field: lowercaseItem, headerName: i, width: 150}
    })
    setJsonHeaders(factoredData);
  }

  // Context value
  const contextValue: JsonContextType = {
    jsonData,
    jsonHeaders,
    addJson,
    addHeaders,
  };

  // Render the provider with the context value
  return (
    <jsonContext.Provider value={contextValue}>{children}</jsonContext.Provider>
  );
};
