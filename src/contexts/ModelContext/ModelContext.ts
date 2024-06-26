import { createContext, useContext } from "react";

interface modelContextType {
  model: any | null;
  modelType: string | null;
  renderModel: (modelJson: string) => void;
  selectModelType: (type: any) => void;
}

export const ModelContext = createContext<modelContextType>({
  model: null,
  modelType: null,
  renderModel: () => {},
  selectModelType: () => {},
});

export const useModel = () => useContext(ModelContext);
