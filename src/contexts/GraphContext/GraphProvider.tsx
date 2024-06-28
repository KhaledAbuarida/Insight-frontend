import { FC, PropsWithChildren, useState } from "react";
import { GraphContext } from "./GraphContext";

const GraphProvider: FC<PropsWithChildren> = ({ children }) => {
  const [graph, setGraph] = useState<any | null>(null);
  const [graphType, setGraphType] = useState<string | null>(null);
  const [xlabel, setXLabel] = useState<string>("");
  const [ylabel, setYLabel] = useState<string>("");
  const [graphTitle, setGraphTitle] = useState<string>("");

  const renderGraph = (graphJson: any) => {
    setGraphTitle("");
    setGraph(graphJson);
    if (graphJson.data[0].type === "pie") {
      setXLabel("");
      setYLabel("");
      setGraphTitle(graphJson.layout.title.text);
      return;
    }
    setXLabel(graphJson.layout.xaxis.title.text);
    setYLabel(graphJson.layout.yaxis.title.text);
    setGraphTitle(graphJson.layout.title.text);
  };

  const selectGraphType = (type: string) => {
    setGraphType(type);
  };

  const changeXLabel = (label: string) => {
    renderGraph({
      ...graph,
      layout: {
        ...graph.layout,
        xaxis: {
          ...graph.layout.xaxis,
          title: {
            ...graph.layout.xaxis.title,
            text: label,
          },
        },
      },
    });
  };
  const changeYLabel = (label: string) => {
    renderGraph({
      ...graph,
      layout: {
        ...graph.layout,
        yaxis: {
          ...graph.layout.xaxis,
          title: {
            ...graph.layout.xaxis.title,
            text: label,
          },
        },
      },
    });
  };

  const changeGraphTitle = (titlee: string) => {
    renderGraph({
      ...graph,
      layout: {
        ...graph.layout,
        title: { text: titlee },
      },
    });
  };

  return (
    <GraphContext.Provider
      value={{
        graph,
        xlabel,
        ylabel,
        graphTitle,
        graphType,
        renderGraph,
        selectGraphType,
        changeXLabel,
        changeYLabel,
        changeGraphTitle,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;
