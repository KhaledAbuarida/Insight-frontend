import React, { useState } from "react";
import { BarChar } from "./BarChar";
import { LineChar } from "./LineChar";

export interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
  red?: number;
}

export const color = ["purple", "green", "orange", "red"];

export const DynamicChart = () => {
  const [type, setType] = useState<string>("Line");
  const [data, setData] = useState<DataItem[]>([
    { name: "Page A", uv: 4000, pv: 2400, amt: 2600, red: 5630 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210, red: 3500 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const fetchChart = () => {
    switch (type) {
      case "Line":
        return <LineChar data={data} />;
      case "Bar":
        return <BarChar data={data} />;
      case "Stacked":
        return <BarChar stacked data={data} />;
      default:
        return <LineChar data={data} />;
    }
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option>Line</option>
        <option>Bar</option>
        <option>Stacked</option>
      </select>
      {fetchChart()}
    </div>
  );
};
