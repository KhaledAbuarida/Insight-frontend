import { createContext, useContext } from "react";

interface graphContextType {
  graph: any | null;
  xlabel: string;
  ylabel: string;
  graphTitle: string;
  graphType: string | null;
  renderGraph: (graphJson: any) => void;
  selectGraphType: (type: string) => void;
  changeXLabel: (label: string) => void;
  changeYLabel: (label: string) => void;
  changeGraphTitle: (title: string) => void;
}

export const GraphContext = createContext<graphContextType>({
  graph: null,
  xlabel: "",
  ylabel: "",
  graphTitle: "",
  graphType: null,
  renderGraph: () => {},
  selectGraphType: () => {},
  changeXLabel: () => {},
  changeYLabel: () => {},
  changeGraphTitle: () => {},
});

export const useGraph = () => useContext(GraphContext);
