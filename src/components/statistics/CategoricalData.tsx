import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

interface DataEntry {
  [key: string]: string | number;
}

interface Props {
  data: DataEntry[];
}

const CategoricalData: React.FC<Props> = ({ data }) => {
  const categoricalColumns = Object.keys(data[0]).filter((columnName) =>
    data.every((entry) => isNaN(parseFloat(entry[columnName] as string)))
  );

  const calculateFrequency = (columnName: string) => {
    const frequencyMap: { [key: string]: number } = {};
    data.forEach((entry) => {
      const category = entry[columnName] as string;
      frequencyMap[category] = (frequencyMap[category] || 0) + 1;
    });
    return frequencyMap;
  };

  const calculatePercentage = (columnName: string) => {
    const frequencyMap = calculateFrequency(columnName);
    const totalEntries = data.length;
    const percentageMap: { [key: string]: number } = {};
    Object.keys(frequencyMap).forEach((key) => {
      percentageMap[key] = (frequencyMap[key] / totalEntries) * 100;
    });
    return percentageMap;
  };

  const getCombinedChartData = () => {
    const combinedFrequencyMap: { [key: string]: number } = {};
    categoricalColumns.forEach((columnName) => {
      const frequencyMap = calculateFrequency(columnName);
      Object.entries(frequencyMap).forEach(([category, frequency]) => {
        combinedFrequencyMap[category] = (combinedFrequencyMap[category] || 0) + frequency;
      });
    });

    const labels = Object.keys(combinedFrequencyMap);
    const data = Object.values(combinedFrequencyMap);

    return {
      labels,
      datasets: [
        {
          label: 'Frequency',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
        },
      ],
    };
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Categorical Data Statistics</h2>
      {categoricalColumns.map((columnName, index) => (
        <div key={index} className="row mb-5">
          <div className="col-md-6">
            <h4>{columnName}</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-white bg-primary">Category</th>
                    <th className="text-white bg-primary">Frequency</th>
                    <th className="text-white bg-primary">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(calculateFrequency(columnName)).map(
                    ([category, frequency], catIndex) => (
                      <tr key={catIndex}>
                        <td>{category}</td>
                        <td>{frequency}</td>
                        <td>
                          {calculatePercentage(columnName)[category].toFixed(2)}%
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <Doughnut data={getCombinedChartData()} options={{ responsive: true, cutout: '50%' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoricalData;