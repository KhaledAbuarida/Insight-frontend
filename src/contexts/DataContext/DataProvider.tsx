import { FC, PropsWithChildren, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  // states
  const [data, setData] = useState<any[] | null>(null);
  const [headers, setHeaders] = useState<any[]>([]);

  const isDataUploaded = !!data;

  useEffect(() => {
    console.log(isDataUploaded);
  }, [data]);

  const addData = (data: any[]) => {
    setData(data);
  };

  const addHeaders = (data: any[]) => {
    const factoredData = data.map((i) => {
      const lowercaseItem = i.toLowerCase();
      return { field: lowercaseItem, headerName: i, width: 150 };
    });
    setHeaders(factoredData);
  };

  return (
    <DataContext.Provider
      value={{ data, headers, isDataUploaded, addData, addHeaders }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
