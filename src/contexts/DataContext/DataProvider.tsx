import { FC, PropsWithChildren, useState } from "react";
import { DataContext } from "./DataContext";

const DATA_KEY = "data";
const DATAID_KEY = "data_id";
const DATATYPE_KEY = "data_type";
const FILE_KEY = "file";
const NUMERICAL_HEADERS_KEY = "numerical_headers";
const CATEGORICAL_HEADERS_KEY = "categorical_headers";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [data, setData] = useState<any | null>(() => {
    const savedData = localStorage.getItem(DATA_KEY);
    return savedData ? JSON.parse(savedData) : null;
  });

  const [fileTitle, setFileTitle] = useState<any | null>(() => {
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
  const [dataType, setDataType] = useState<string | null>(
    localStorage.getItem(DATATYPE_KEY)
  );

  const [dataId, setDataId] = useState<number | null>(() => {
    const savedFile = localStorage.getItem(DATAID_KEY);
    return savedFile ? JSON.parse(savedFile) : null;
  });

  const [columnPicker, setColumnPicker] = useState<string | null>(null);
  const [rowPicker, setRowPicker] = useState<string | null>(null);

  const isDataUploaded = !!data;

  const addData = (data: any, dataId: number) => {
    setData(data);
    setDataId(dataId);
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
    localStorage.setItem(DATAID_KEY, JSON.stringify(dataId));
  };

  const addHeaders = (num_data: any[], cat_data: any[]) => {
    const factoredNumericalData = num_data.map((i) => {
      return { field: i, headerName: i, width: 150 };
    });

    const factoredCategoricalData = cat_data.map((i) => {
      return { field: i, headerName: i, width: 150 };
    });

    setNumericalHeaders(factoredNumericalData);
    setCategoricalHeaders(factoredCategoricalData);
    localStorage.setItem(
      NUMERICAL_HEADERS_KEY,
      JSON.stringify(factoredNumericalData)
    );
    localStorage.setItem(
      CATEGORICAL_HEADERS_KEY,
      JSON.stringify(factoredCategoricalData)
    );
  };

  const addColumnPicker = (column: string) => {
    setColumnPicker(column);
  };

  const addRowPicker = (row: string) => {
    setRowPicker(row);
  };

  const addDataType = (type: string) => {
    setDataType(type);
    localStorage.setItem(DATATYPE_KEY, type);
  };

  const addFileTitle = (file: any) => {
    setFileTitle(file);
    localStorage.setItem(FILE_KEY, JSON.stringify(file));
  };

  const deleteFile = () => {
    setFileTitle(null);
    setData(null);
    setDataType("");
    setNumericalHeaders(null);
    setCategoricalHeaders(null);
    setDataId(null);
    localStorage.removeItem(FILE_KEY);
    localStorage.removeItem(DATA_KEY);
    localStorage.removeItem(DATAID_KEY);
    localStorage.removeItem(DATATYPE_KEY);
    localStorage.removeItem(NUMERICAL_HEADERS_KEY);
    localStorage.removeItem(CATEGORICAL_HEADERS_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        dataId,
        columnPicker,
        rowPicker,
        numericalHeaders,
        categoricalHeaders,
        isDataUploaded,
        fileTitle,
        dataType,
        addDataType,
        addColumnPicker,
        addRowPicker,
        addFileTitle,
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
