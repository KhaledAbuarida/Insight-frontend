import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface DataEntry {
  [key: string]: string | number;
}

interface Props {
  data: DataEntry[];
}

const NumericalData: React.FC<Props> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const isNumeric = (value: string | number) => {
    return value !== "" && !isNaN(parseFloat(value as string)) && isFinite(value as number);
  };

  const isExcludedColumn = (columnName: string) => {
    const lowerCaseColumnName = columnName.toLowerCase();
    return (
      lowerCaseColumnName.includes("id") ||
      lowerCaseColumnName.includes("date")
    );
  };

  const numericalColumns = Object.keys(data[0]).filter(
    (columnName) =>
      !isExcludedColumn(columnName) &&
      data.some((entry) => isNumeric(entry[columnName]))
  );

  const extractNumericalValues = (columnName: string) => {
    return data
      .map((entry) => parseFloat(entry[columnName] as string))
      .filter((value) => !isNaN(value));
  };

  const calculateMean = (data: number[]) =>
    data.reduce((acc, val) => acc + val, 0) / data.length;

  const columnData = numericalColumns.map((columnName) =>
    extractNumericalValues(columnName)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Data Statistics</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead style={{ backgroundColor: "#007bff", color: "#ffffff" }}>
            <tr>
              <th scope="col" style={{ border: "none" }}>Statistic</th>
              {numericalColumns.map((columnName, index) => (
                <th
                  scope="col"
                  key={index}
                  style={{
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    border: "none",
                  }}
                >
                  {columnName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="bg-secondary text-white"
                style={{ border: "none" }}
              >
                Mean
              </th>
              {columnData.map((data, index) => (
                <td
                  key={index}
                  style={{
                    backgroundColor: "#e9ecef",
                    border: "none",
                  }}
                >
                  {calculateMean(data).toFixed(2)}
                </td>
              ))}
            </tr>
            <tr>
              <th
                scope="row"
                className="bg-secondary text-white"
                style={{ border: "none" }}
              >
                Minimum
              </th>
              {columnData.map((data, index) => (
                <td
                  key={index}
                  style={{
                    backgroundColor: "#e9ecef",
                    border: "none",
                  }}
                >
                  {Math.min(...data)}
                </td>
              ))}
            </tr>
            <tr>
              <th
                scope="row"
                className="bg-secondary text-white"
                style={{ border: "none" }}
              >
                Maximum
              </th>
              {columnData.map((data, index) => (
                <td
                  key={index}
                  style={{
                    backgroundColor: "#e9ecef",
                    border: "none",
                  }}
                >
                  {Math.max(...data)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NumericalData;