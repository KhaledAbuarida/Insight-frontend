import { FC, PropsWithChildren, useState } from "react";
import { DataContext } from "./DataContext";

const DATA_KEY = "data";
const FILE_KEY = "file";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [data, setData] = useState<any[] | null>(() => {
    const savedData = localStorage.getItem(DATA_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [headers, setHeaders] = useState<any[]>([]);

  const [file, setFile] = useState<File | null>(() => {
    const savedFile = localStorage.getItem(FILE_KEY);
    return savedFile ? JSON.parse(savedFile) : null;
  });

  const isDataUploaded = !!data;

  const worker = new Worker(new URL("./worker.js", import.meta.url));

  const addData = (data: any[]) => {
    setData(data);
    worker.postMessage(data);
    worker.onmessage = (e) => {
      localStorage.setItem(DATA_KEY, e.data);
    };
  };

  const addHeaders = (data: any[]) => {
    const factoredData = data.map((i) => {
      const lowercaseItem = i.toLowerCase();
      return { field: lowercaseItem, headerName: i, width: 150 };
    });
    setHeaders(factoredData);
  };

  const uploadFile = (file: File) => {
    setFile(file);
    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    };
    worker.postMessage(fileData);
    worker.onmessage = (e) => {
      localStorage.setItem(FILE_KEY, e.data);
    };
  };

  const deleteFile = () => {
    setFile(null);
    setData(null);
    localStorage.removeItem(FILE_KEY);
    localStorage.removeItem(DATA_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        headers,
        isDataUploaded,
        file,
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
