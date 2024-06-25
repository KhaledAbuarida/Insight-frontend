import React from "react";
import {
  Container,
  Box,
  Typography,

} from "@mui/material";
import { useAuth } from "../contexts/AuthContext/AuthContext";


const ProfilePage: React.FC = () => {
  //contexts
  const { userName, userEmail } = useAuth();

  return (
    <Container>
      <Box mt={4} marginTop="80px">
        <Typography variant="h4" component="h1" gutterBottom>
          {userName}
        </Typography>
        <Typography variant="body1">Email: {userEmail} </Typography>
        <Typography variant="body1">
          Bio: Software developer with a passion for open source.
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="body1">No profile data</Typography>
      </Box>
    </Container>
  );
};

export default ProfilePage;
