export interface IModelType {
  name: string;
  type: string;
  plotly: string;
}

export const modelTypes: IModelType[] = [
  {
    name: "Text Classification",
    type: "Textual",
    plotly: "bar",
  },
  {
    name: "Sentiment Analysis",
    type: "Textual",
    plotly: "bar",
  },
  {
    name: "Emotion Analysis",
    type: "Textual",
    plotly: "bar",
  },
  {
    name: "Customer Segmentation",
    type: "Numerical",
    plotly: "scatter",
  },
  {
    name: "Time Series Prediction",
    type: "Numerical",
    plotly: "scatter",
  },
  {
    name: "Churn Prediction",
    type: "Numerical",
    plotly: "bar",
  },
];
