import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Brush,
  LineChart,
} from "recharts";
import { DataItem, color } from "./DynamicChart";

interface Props {
  data: DataItem[];
}

export const LineChar = ({ data }: Props) => {
  const getLineChart = () => {
    const keysArr = Object.keys(data[0]).slice(1);
    return keysArr.map((item, index) => (
      <Line key={item} type="monotone" dataKey={item} stroke={color[index]} />
    ));
  };

  const modifyFormatter = (value: any, name: any, props: any) => {
    const nameJSX = (
      <span>
        <span
          style={{
            display: "inline-block",
            marginRight: "5px",
            borderRadius: "10px",
            width: "10px",
            height: "10px",
            backgroundColor: props.color,
          }}
        ></span>
        {name} : {value}
      </span>
    );
    return [nameJSX];
  };

  return (
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid
        strokeDasharray="3 3"
        horizontal={false}
        vertical={false}
      />
      <XAxis dataKey={Object.keys(data[0])[0]} />
      <YAxis />
      <Tooltip formatter={modifyFormatter} />
      <Legend />
      {getLineChart()}
      <Brush dataKey={Object.keys(data[0])[0]}>
        <LineChart>{getLineChart()}</LineChart>
      </Brush>
    </LineChart>
  );
};
