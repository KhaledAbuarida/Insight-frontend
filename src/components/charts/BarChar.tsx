import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataItem, color } from "./DynamicChart";

interface Props {
  stacked?: boolean;
  data: DataItem[];
}

export const BarChar = ({ stacked, data }: Props) => {
  const getBar = () => {
    const keysArr = Object.keys(data[0]).slice(1);
    return keysArr.map((item, index) => (
      <Bar
        key={item}
        dataKey={item}
        stackId={stacked ? "a" : undefined}
        fill={color[index]}
      />
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
    return [nameJSX].reverse();
  };

  return (
    <BarChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
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
      {getBar()}
      <Brush dataKey={Object.keys(data[0])[0]}>
        <BarChart>{getBar()}</BarChart>
      </Brush>
    </BarChart>
  );
};

// import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
// // const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2600,
//     red: 5630,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//     red: 3500,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const color = ["#8884d8", "#82ca9d", "orange", "pink"]

// export const BarChar = () => {
//   return (
//     <BarChart width={600} height={300} data={data}>
//       <XAxis dataKey="name" stroke="#8884d8" />
//       <YAxis />
//       <Tooltip />
//       <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//       <Bar dataKey="uv" fill="#8884d8" barSize={30} />
//     </BarChart>
//   );
// };
