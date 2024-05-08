import React, { createContext, useState, ReactNode } from "react";

// Define the context type
interface JsonContextType {
  jsonData: any[] | null; // Use the specific interface here
  addJson: (data: any[]) => void; // Use the specific interface here
  testMethod: () => string;
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
  const [jsonData, setJsonData] = useState<any[] | null>(null);

  // Function to update the JSON data
  const addJson = (data: any[]) => {
    setJsonData(data);
  };

  const testMethod = () => {
    return "hello this is addJson function and it is work 😉"
  };

  // Context value
  const contextValue: JsonContextType = {
    jsonData,
    addJson,
    testMethod,
  };

  // Render the provider with the context value
  return (
    <jsonContext.Provider value={contextValue}>{children}</jsonContext.Provider>
  );
};
