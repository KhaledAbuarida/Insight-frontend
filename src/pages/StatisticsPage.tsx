
import React from "react";
import { useState } from "react";
import NumericalData from "../components/statistics/NumericalData";
import CategoricalData from "../components/statistics/CategoricalData";
import { useData } from "../contexts/DataContext/DataContext";

const StatisticsPage = () => {
  const [activeTab, setActiveTab] = useState("categorical");
  const { data } = useData();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: "60px" }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <div
            className={`nav-link ${
              activeTab === "categorical" ? "active" : ""
            }`}
            onClick={() => handleTabClick("categorical")}
          >
            Categorical Data
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === "numerical" ? "active" : ""}`}
            onClick={() => handleTabClick("numerical")}
          >
            Numerical Data
          </div>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "categorical" && <CategoricalData data={data || []} />}
        {activeTab === "numerical" && <NumericalData data={data || []} />}
      </div>
    </div>
  );
};

export default StatisticsPage;