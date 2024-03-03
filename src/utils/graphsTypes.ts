import { GiHistogram } from "react-icons/gi";
import { GiPieChart } from "react-icons/gi";
import { IconType } from "react-icons";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { BiScatterChart } from "react-icons/bi";

import { AiFillBoxPlot } from "react-icons/ai";



export interface IGraphType {
    Name: string;
    Icon: IconType;
}


export const graphsTypes: IGraphType[] = [
    {
        Name: 'Histogram',
        Icon: GiHistogram,
    },
    {
        Name: 'Pie Chart',
        Icon: GiPieChart
    },
    {
        Name: 'Bar Chart',
        Icon: RiBarChart2Fill
    },
    {
        Name: 'Line Chart',
        Icon: FaChartLine
    },
    {
        Name: 'Box Plot',
        Icon: AiFillBoxPlot
    },
    {
        Name: 'Scatter Plot',
        Icon: BiScatterChart
    }
]