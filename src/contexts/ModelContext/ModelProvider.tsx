import { FC, PropsWithChildren, useState } from "react";
import { ModelContext } from "./ModelContext";

const ModelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [model, setModel] = useState<any | null>(null);
  const [modelType, setModelType] = useState<string | null>(null);

  const renderModel = (graphJson: string) => {
    setModel(graphJson);
  };

  const selectModelType = (type: any) => {
    setModelType(type);
  };

  return (
    <ModelContext.Provider
      value={{ model, modelType, renderModel, selectModelType }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
