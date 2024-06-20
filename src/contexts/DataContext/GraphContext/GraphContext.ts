import { createContext, useContext } from "react";

interface graphContextType {
  graph: string | null;
  graphType: string | null;
  renderGraph: (graphJson: string) => void;
  selectGraphType: (type: string) => void;
}

export const GraphContext = createContext<graphContextType>({
  graph: null,
  graphType: null,
  renderGraph: () => {},
  selectGraphType: () => {},
});

export const useGraph = () => useContext(GraphContext);
