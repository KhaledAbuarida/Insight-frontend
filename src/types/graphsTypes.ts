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
}

export const graphsTypes: IGraphType[] = [
    {
        name: 'Histogram',
        plotly: 'histogram',
        icon: GiHistogram,

    },
    {
        name: 'PieChart',
        plotly: 'pie',
        icon: GiPieChart
    },
    {
        name: 'BarChart',
        plotly: 'bar',
        icon: RiBarChart2Fill
    },
    {
        name: 'LineChart',
        plotly: 'line',
        icon: FaChartLine
    },
    {
        name: 'BoxPlot',
        plotly: 'box',
        icon: AiFillBoxPlot
    },
    {
        name: 'ScatterPlot',
        plotly: 'scattergl',
        icon: BiScatterChart
    }
]