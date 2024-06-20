import { Box } from "@mui/material";
import { IModelType } from "../global/modelsTypes";

interface Props {
  TypeRef: IModelType;
}

const ModelType = ({ TypeRef }: Props) => {
  return (
    <Box
      sx={{
        // backgroundColor: graphType === TypeRef.name ? "#387ADF" : "#B7C9F2",
        backgroundColor: "#387ADF",
        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        margin: "5px 20px",
        "&:hover": {
          backgroundColor: "#2C5FB5",
        },
        color: "#fff",
        fontWeight: "bolder",
        fontSize: "18px",
      }}
    >
      {TypeRef.name}
    </Box>
  );
};

export default ModelType;
