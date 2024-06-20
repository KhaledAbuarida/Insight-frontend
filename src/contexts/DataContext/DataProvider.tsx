import { FC, PropsWithChildren, useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<any[]>([]);

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
    <DataContext.Provider value={{ data, headers, addData, addHeaders }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
