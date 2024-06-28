import { GiHistogram } from "react-icons/gi";
import { GiPieChart } from "react-icons/gi";
import { IconType } from "react-icons";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { BiScatterChart } from "react-icons/bi";
import { AiFillBoxPlot } from "react-icons/ai";

export interface IGraphType {
  name: string;
  plotly: string;
  icon: IconType;
  filter: string;
}

export const graphsTypes: IGraphType[] = [
  {
    name: "Histogram",
    plotly: "histogram",
    icon: GiHistogram,
    filter: "histogram",
  },
  {
    name: "PieChart",
    plotly: "pie",
    icon: GiPieChart,
    filter: "pie_chart",
  },
  {
    name: "BarChart",
    plotly: "bar",
    icon: RiBarChart2Fill,
    filter: "bar_chart",
  },
  {
    name: "LineChart",
    plotly: "line",
    icon: FaChartLine,
    filter: "line_chart",
  },
  {
    name: "BoxPlot",
    plotly: "box",
    icon: AiFillBoxPlot,
    filter: "box_plot",
  },
  {
    name: "ScatterPlot",
    plotly: "scattergl",
    icon: BiScatterChart,
    filter: "scatter_plot",
  },
];
