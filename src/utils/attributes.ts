export interface IAttribute {
  field: string;
  headerName: string;
  width?: number;
}

const Attributes: IAttribute[] = [
  // { field: "ID", headerName: "Id", width: 150 },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "Age", headerName: "Age", width: 150 },
  // { field: "Company", headerName: "Company", width: 150 },
  { field: "City", headerName: "City", width: 150 },
  // { field: "Country", headerName: "Country", width: 150 },
  // { field: "Phone1", headerName: "Phone 1", width: 150 },
  // { field: "Phone2", headerName: "Phone 2", width: 150 },
  // { field: "Email", headerName: "Email", width: 150 },
  // { field: "SubscriptionDate", headerName: "Subscription Date", width: 150 },
  // { field: "Website", headerName: "Website", width: 150 },
];

export default Attributes;