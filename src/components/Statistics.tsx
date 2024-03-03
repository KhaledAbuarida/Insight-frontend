import React from "react";

interface IStatistics {
  key: string;
  value: string;
}

export const Statistics = () => {
  const data: IStatistics[] = [
    { key: "Shares", value: "1,503" },
    { key: "Clicks", value: "11,503" },
    { key: "Virality", value: "3.55%" },
    { key: "Counteries", value: "36" },
  ];
  return <div className="stat-container"></div>;
};
