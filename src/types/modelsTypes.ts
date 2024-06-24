export interface IModelType {
  name: string;
  type: string;
}

export const modelTypes: IModelType[] = [
  {
    name: "Text Classification",
    type: "Textual",
  },
  {
    name: "Sentiment Analysis",
    type: "Textual",
  },
  {
    name: "Emotion Analysis",
    type: "Textual",
  },
  {
    name: "Customer Segmentation",
    type: "Numerical",
  },
  {
    name: "Time Series Prediction",
    type: "Numerical",
  },
  {
    name: "Churn Prediction",
    type: "Numerical",
  },
];
