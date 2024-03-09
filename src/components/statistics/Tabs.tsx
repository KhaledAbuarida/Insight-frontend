import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NumericalData from "./NumericalData";
import CategoricalData from "./CategoricalData";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("categorical");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
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
        {activeTab === "categorical" && <CategoricalData />}
        {activeTab === "numerical" && <NumericalData />}
      </div>
    </div>
  );
};

export default Tabs;
