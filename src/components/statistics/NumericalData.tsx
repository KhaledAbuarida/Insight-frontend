import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    id: "1",
    CustomerId: "DD37Cf93aecA6Dc",
    FirstName: "Sheryl",
    LastName: "Baxter",
    Company: "Rasmussen Group",
    City: "East Leonard",
    Country: "Chile",
    Phone1: "229.077.5154",
    Phone2: "8",
    Email: "zunigavanessa@smith.info",
    SubscriptionDate: "2020-08-24",
    Website: "http://www.stephenson.com/",
  },
  {
    id: "86",
    CustomerId: "C6763c99d0bd16D",
    FirstName: "Emma",
    LastName: "Cunningham",
    Company: "Stephens Inc",
    City: "North Jillianview",
    Country: "New Zealand",
    Phone1: "2",
    Phone2: "4",
    Email: "walter83@juarez.org",
    SubscriptionDate: "2022-05-13",
    Website: "http://www.reid.info/",
  },
];

const NumericalData = () => {
  const numericalColumns = Object.keys(data[0]).filter((columnName) =>
    data.every((entry) => !isNaN(parseFloat(entry[columnName])))
  );

  const checkDataType = (data: any[]) => {
    const isNumerical = data.every((value: number) => !isNaN(value));
    return isNumerical ? "Numerical" : "Categorical";
  };

  const extractNumericalValues = (columnName: string) => {
    return data.map((entry) => parseFloat(entry[columnName]) || 0);
  };

  const columnData = numericalColumns.map((columnName) =>
    extractNumericalValues(columnName)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Data Statistics</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {numericalColumns.map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mean</td>
              {columnData.map((data, index) => (
                <td key={index}>
                  {(
                    data.reduce((acc, val) => acc + val, 0) / data.length
                  ).toFixed(2)}
                </td>
              ))}
            </tr>
            <tr>
              <td>Median</td>
              {columnData.map((data, index) => (
                <td key={index}>{calculateMedian(data)}</td>
              ))}
            </tr>
            <tr>
              <td>Minimum</td>
              {columnData.map((data, index) => (
                <td key={index}>{Math.min(...data)}</td>
              ))}
            </tr>
            <tr>
              <td>Maximum</td>
              {columnData.map((data, index) => (
                <td key={index}>{Math.max(...data)}</td>
              ))}
            </tr>
            <tr>
              <td>Standard Deviation</td>
              {columnData.map((data, index) => (
                <td key={index}>
                  {calculateStandardDeviation(data).toFixed(2)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const calculateMedian = (data: any[]) => {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
    : sortedData[middleIndex];
};

const calculateStandardDeviation = (data: any[]) => {
  const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
  return Math.sqrt(
    data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length
  );
};

export default NumericalData;
