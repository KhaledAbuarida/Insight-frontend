import Attributes from "../../utils/attributes";
import { CSVAttribute } from "../attributes-picker/AttributePicker";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <p className="sidebarHeader">Attributes</p>
        <ul className="sidebarList">
          {Attributes.map((attr) => (
            <CSVAttribute attrName={attr} />
          ))}
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
};
