import { GiHistogram } from "react-icons/gi";
import { FcPieChart } from "react-icons/fc";
import { FcScatterPlot } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { AiTwotoneBoxPlot } from "react-icons/ai";
import { IconType } from "react-icons";

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
        Icon: FcPieChart
    },
    {
        Name: 'Bar Chart',
        Icon: FcBarChart
    },
    {
        Name: 'Line Chart',
        Icon: FcLineChart
    },
    {
        Name: 'Box Plot',
        Icon: AiTwotoneBoxPlot
    },
    {
        Name: 'Scatter Plot',
        Icon: FcScatterPlot
    }
]