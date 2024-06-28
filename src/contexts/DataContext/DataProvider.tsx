import { FC, PropsWithChildren, useState } from "react";
import { DataContext } from "./DataContext";

const DATA_KEY = "data";
const FILE_KEY = "file";
const NUMERICAL_HEADERS_KEY = "numerical_headers";
const CATEGORICAL_HEADERS_KEY = "categorical_headers";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [data, setData] = useState<any | null>(() => {
    const savedData = localStorage.getItem(DATA_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [file, setFile] = useState<any | null>(() => {
    const savedFile = localStorage.getItem(FILE_KEY);
    return savedFile ? JSON.parse(savedFile) : null;
  });

  const [numericalHeaders, setNumericalHeaders] = useState<any[] | null>(() => {
    const savedData = localStorage.getItem(NUMERICAL_HEADERS_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [categoricalHeaders, setCategoricalHeaders] = useState<any[] | null>(
    () => {
      const savedData = localStorage.getItem(CATEGORICAL_HEADERS_KEY);
      return savedData ? JSON.parse(savedData) : null;
    }
  );
  const [dataType, setDataType] = useState<string>("");

  const isDataUploaded = !!data;

  const addData = (data: any) => {
    setData(data);
    console.log("from addData function", data);

    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  };

  const addHeaders = (num_data: any[], cat_data: any[]) => {
    // const factoredData = num_data.map((i) => {
    //   const lowercaseItem = i.toLowerCase();
    //   return { field: lowercaseItem, headerName: i, width: 150 };
    // });

    setNumericalHeaders(num_data);
    setCategoricalHeaders(cat_data);
    localStorage.setItem(NUMERICAL_HEADERS_KEY, JSON.stringify(num_data));
    localStorage.setItem(CATEGORICAL_HEADERS_KEY, JSON.stringify(cat_data));
  };

  const addDataType = (type: string) => {
    setDataType(type);
  };

  const uploadFile = (file: any) => {
    setFile(file);
    localStorage.setItem(FILE_KEY, JSON.stringify(file));
  };

  const deleteFile = () => {
    setFile(null);
    setData(null);
    setDataType("");
    setNumericalHeaders(null);
    setCategoricalHeaders(null);
    localStorage.removeItem(FILE_KEY);
    localStorage.removeItem(DATA_KEY);
    localStorage.removeItem(NUMERICAL_HEADERS_KEY);
    localStorage.removeItem(CATEGORICAL_HEADERS_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        numericalHeaders,
        categoricalHeaders,
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
