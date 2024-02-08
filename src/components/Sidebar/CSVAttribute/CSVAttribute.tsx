import "./CSVAttribute.css";

interface Props {
  attrName: String;
}

export const CSVAttribute = ({ attrName }: Props) => {
  return <div className="container">{attrName}</div>;
};
