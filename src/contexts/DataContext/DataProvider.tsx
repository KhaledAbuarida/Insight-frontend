import { FC, PropsWithChildren, useState } from "react";
import { DataContext } from "./DataContext";

const DATA_KEY = "data";
const FILE_KEY = "file";
const HEADERS_KEY = "headers";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [data, setData] = useState<any | null>(() => {
    const savedData = localStorage.getItem(DATA_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [file, setFile] = useState<File | null>(() => {
    const savedFile = localStorage.getItem(FILE_KEY);
    return savedFile ? JSON.parse(savedFile) : null;
  });

  const [headers, setHeaders] = useState<any[] | null>(() => {
    const savedData = localStorage.getItem(HEADERS_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });
  const [dataType, setDataType] = useState<string>("");

  const isDataUploaded = !!data;

  const addData = (data: any) => {
    setData(data);

    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  };

  const addHeaders = (data: any[]) => {
    const factoredData = data.map((i) => {
      const lowercaseItem = i.toLowerCase();
      return { field: lowercaseItem, headerName: i, width: 150 };
    });
    setHeaders(factoredData);
    localStorage.setItem(HEADERS_KEY, JSON.stringify(factoredData));
  };

  const addDataType = (type: string) => {
    setDataType(type);
  };

  const uploadFile = (file: File) => {
    setFile(file);
    localStorage.setItem(FILE_KEY, JSON.stringify(file));
  };

  const deleteFile = () => {
    setFile(null);
    setData(null);
    setDataType("");
    setHeaders(null);
    localStorage.removeItem(FILE_KEY);
    localStorage.removeItem(DATA_KEY);
    localStorage.removeItem(HEADERS_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        headers,
        isDataUploaded,
        file,
        dataType,
        addDataType,
        uploadFile,
        deleteFile,
        addData,
        addHeaders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
