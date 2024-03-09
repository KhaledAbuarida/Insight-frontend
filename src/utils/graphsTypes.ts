import { GiHistogram } from "react-icons/gi";
import { GiPieChart } from "react-icons/gi";
import { IconType } from "react-icons";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { BiScatterChart } from "react-icons/bi";
import { AiFillBoxPlot } from "react-icons/ai";

export interface IGraphType {
    name: string;
    value: string,
    icon: IconType;
}

export const graphsTypes: IGraphType[] = [
    {
        name: 'Histogram',
        value: 'histogram',
        icon: GiHistogram,

    },
    {
        name: 'Pie Chart',
        value: 'pie',
        icon: GiPieChart
    },
    {
        name: 'Bar Chart',
        value: 'BarChart',
        icon: RiBarChart2Fill
    },
    {
        name: 'Line Chart',
        value: 'line',
        icon: FaChartLine
    },
    {
        name: 'Box Plot',
        value: 'boxPlot',
        icon: AiFillBoxPlot
    },
    {
        name: 'Scatter Plot',
        value: 'scatterPlot',
        icon: BiScatterChart
    }
]