import "bootstrap/dist/css/bootstrap.min.css";

interface DataEntry {
  [key: string]: string;
}

const data: DataEntry[] = [
  {
    id: "3",
    CustomerId: "DD37Cf93aecA6Dc",
    FirstName: "Shery",
    LastName: "Baxter",
    Company: "Rasmussen Group",
    City: "East Leonard",
    Country: "Chile",
    Phone1: "229.077.5154",
    Phone2: "397.884.0519x718",
    Email: "zunigavanessa@smith.info",
    SubscriptionDate: "2020-08-24",
    Website: "http://www.stephenson.com/",
  },
  {
    id: "1",
    CustomerId: "DD37Cf93aecA6Dc",
    FirstName: "Sheryl",
    LastName: "Baxter",
    Company: "Rasmussen Group",
    City: "East Leonard",
    Country: "Chile",
    Phone1: "229.077.5154",
    Phone2: "397.884.0519x718",
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
    Phone2: "(312)164-4545x2284",
    Email: "walter83@juarez.org",
    SubscriptionDate: "2022-05-13",
    Website: "http://www.reid.info/",
  },
];

const CategoricalData = () => {
  const categoricalColumns = Object.keys(data[0]).filter((columnName) =>
    data.every((entry) => isNaN(parseFloat(entry[columnName])))
  );

  const calculateFrequency = (columnName: string) => {
    const frequencyMap: { [key: string]: number } = {};
    data.forEach((entry) => {
      const category = entry[columnName];
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Categorical Data Statistics</h2>
      {categoricalColumns.map((columnName, index) => (
        <div key={index}>
          <h4>{columnName}</h4>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Category</th>
                  <th>Frequency</th>
                  <th>Percentage</th>
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
      ))}
    </div>
  );
};

export default CategoricalData;
