import React, { useState } from "react";

const CustomizeGraph = () => {
  const [chartType, setChartType] = useState("histogram"); // Default chart type
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [names, setNames] = useState("");
  const [values, setValues] = useState("");
  const [function_type, setFunction_type] = useState("count"); // Function type (count, sum, average)
  const [title, setTitle] = useState(""); // Title for the histogram
  const [color, setColor] = useState("#3498db"); // Color for the bars
  const [numberOfBins, setNumberOfBins] = useState(10);
  const [lineshape, setLinesaphe] = useState("linear"); // Lineshape
  const [Barmode, setBarmode] = useState("relative"); // Barmode
  const [columnToDistribute, setColumnToDistribute] = useState("");
  const [normalizationType, setNormalizationType] = useState("none"); // Normalization type (percent, probability, density, none)
  const [dataPointsToShow, setDataPointsToShow] = useState("all");
  const [scatterSize, setScatterSize] = useState(5); // Distribute with size (numerical) for Scatter Plot
  const [scatterColor, setScatterColor] = useState(""); // Distribute with color (categorical) for Scatter Plot
  const [scatterSymbols, setScatterSymbols] = useState(""); // Distribute with symbols (categorical) for Scatter Plot
  const handleChartTypeChange = (
    newChartType: React.SetStateAction<string>
  ) => {
    setChartType(newChartType);
    // Additional logic for handling chart type change
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <label className="form-label">Choose Chart Type:</label>
          <select
            className="form-select mb-3"
            onChange={(e) => handleChartTypeChange(e.target.value)}
          >
            <option value="histogram">Histogram</option>
            {/* <option value="column">Column Chart</option> */}
            <option value="line">Line Chart</option>
            <option value="BarChart">Bar Chart</option>
            <option value="boxPlot">Box Plot</option>
            <option value="scatterPlot">Scatter Plot</option>
            <option value="pie">pie Chart</option>
          </select>
          <div>
            <label className="form-label">Title :</label>
            <input
              type="text"
              className="form-control mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {chartType !== "pie" && (
              <div>
                <label className="form-label">X Label :</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={xLabel}
                  onChange={(e) => setXLabel(e.target.value)}
                />

                <label className="form-label">Y Label :</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  value={yLabel}
                  onChange={(e) => setYLabel(e.target.value)}
                />

                <label className="form-label">Color:</label>
                <input
                  type="color"
                  className="form-control mb-3"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            )}
          </div>
          {/* Parameters specific to the histogram */}
          {chartType === "histogram" && (
            <div>
              <label className="form-label">Function type:</label>
              <select
                className="form-select mb-3"
                value={function_type}
                onChange={(e) => setFunction_type(e.target.value)}
              >
                <option value="count">Count</option>
                <option value="sum">Sum</option>
                <option value="average">Average</option>
              </select>

              <label className="form-label">ColumnToDistribute:</label>
              <select
                className="form-select mb-3"
                value={columnToDistribute}
                onChange={(e) => setColumnToDistribute(e.target.value)}
              >
                <option value="data">data</option>
              </select>

              <label className="form-label">Number of Bins:</label>
              <input
                type="number"
                className="form-control mb-3"
                value={numberOfBins}
                onChange={(e: any) => setNumberOfBins(e.target.value)}
              />

              <label className="form-label">Normalization Type:</label>
              <select
                className="form-select mb-3"
                value={normalizationType}
                onChange={(e) => setNormalizationType(e.target.value)}
              >
                <option value="percent">Percent</option>
                <option value="probability">Probability</option>
                <option value="density">Density</option>
                <option value="none">None</option>
              </select>
            </div>
          )}

          {/* Repeat the pattern for other chart types... */}
          {chartType === "line" && (
            <div>
              <label className="form-label">Line Shape:</label>
              <select
                className="form-select mb-3"
                value={lineshape}
                onChange={(e) => setLinesaphe(e.target.value)}
              >
                <option value={"linear"}>Linear</option>
                <option value={"spline"}>Spline</option>
              </select>

              <label className="form-label">Column to Distribute:</label>
              <select
                className="form-select mb-3"
                value={columnToDistribute}
                onChange={(e) => setColumnToDistribute(e.target.value)}
              >
                <option value="data">data</option>
              </select>
            </div>
          )}
          {chartType === "BarChart" && (
            <div>
              <label className="form-label">Bar Mode:</label>
              <select
                className="form-select mb-3"
                value={Barmode}
                onChange={(e) => setBarmode(e.target.value)}
              >
                <option value="relative">Relative</option>
                <option value="group">Group</option>
                <option value="overlay">Overlay</option>
              </select>

              <label className="form-label">Column to Distribute:</label>
              <select
                className="form-select mb-3"
                value={columnToDistribute}
                onChange={(e) => setColumnToDistribute(e.target.value)}
              >
                <option value="data">data</option>
              </select>
            </div>
          )}
          {chartType === "boxPlot" && (
            <div>
              <label className="form-label">Column to Distribute:</label>
              <input
                type="text"
                className="form-control mb-3"
                value={columnToDistribute}
                onChange={(e) => setColumnToDistribute(e.target.value)}
              />

              <label className="form-label">Data Points to Show:</label>
              <select
                className="form-select mb-3"
                value={dataPointsToShow}
                onChange={(e) => setDataPointsToShow(e.target.value)}
              >
                <option value="all">All</option>
                <option value="outliers">Outliers</option>
              </select>
            </div>
          )}
          {chartType === "scatterPlot" && (
            <div>
              <label className="form-label">Distribute with Size :</label>
              <input
                type="number"
                className="form-control mb-3"
                value={scatterSize}
                onChange={(e: any) => setScatterSize(e.target.value)}
              />

              <label className="form-label">Distribute with Color :</label>
              <select
                className="form-select mb-3"
                value={scatterColor}
                onChange={(e) => setScatterColor(e.target.value)}
              >
                <option value="data">data</option>
              </select>
              <label className="form-label">Distribute with Symbols :</label>
              <select
                className="form-select mb-3"
                value={scatterSymbols}
                onChange={(e) => setScatterSymbols(e.target.value)}
              >
                <option value="data">data</option>
              </select>
            </div>
          )}
          {chartType === "pie" && (
            <div>
              <label className="form-label">Names :</label>
              <input
                type="text"
                className="form-control mb-3"
                value={names}
                onChange={(e) => setNames(e.target.value)}
              />

              <label className="form-label">Values :</label>
              <input
                type="text"
                className="form-control mb-3"
                value={values}
                onChange={(e) => setValues(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeGraph;
