import { useState, ChangeEvent, FormEvent } from "react";
import csvtojson from "csvtojson";
import "./Upload.css";

interface CSVData {
  [key: string]: string;
}

const Upload = () => {
  const [file, setFile] = useState<File | undefined>();
  const [jsonData, setJsonData] = useState<CSVData[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (file) {
      const csvString: string = await readFileAsText(file);
      const jsonArray: CSVData[] = await csvtojson().fromString(csvString);
      setJsonData(jsonArray);
    }
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          resolve(event.target.result as string);
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <input
          className="chooseFile"
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
        <button className="uploadBtn" onClick={handleOnSubmit}>
          Upload CSV
        </button>
      </form>
      {/* show csv in json formate */}
      {/* {jsonData.length > 0 && (
        <div>
          <h2>Converted JSON Data</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default Upload;
