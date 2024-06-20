import { FC, PropsWithChildren, useState } from "react";
import { GraphContext } from "./GraphContext";

const GraphProvider: FC<PropsWithChildren> = ({ children }) => {
  const [graph, setGraph] = useState<string | null>(null);
  const [graphType, setGraphType] = useState<string | null>(null);

  const renderGraph = (graphJson: string) => {
    setGraph(graphJson);
  };

  const selectGraphType = (type: string) => {
    console.log(type);
    setGraphType(type);
  };

  return (
    <GraphContext.Provider
      value={{ graph, graphType, renderGraph, selectGraphType }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;
