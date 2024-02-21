import Upload from "../../components/upload/Upload";
import "./UploadPage.css";

const UploadPage = () => {
  return (
    <div className="uploadPageContainer">
      <div className="uploadContainer">
        <div className="upperPart">
          <img src="./assets/logo.png" width={300} />
        </div>
        <div className="lowerPart">
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
