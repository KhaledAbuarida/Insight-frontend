import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { loginAPI } from "../api/authAPI";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginPage = () => {
  // states
  const [error, setError] = useState<string | null>(null);

  // navigation
  const navigate = useNavigate();

  // context
  const { login } = useAuth();

  // form validation schema
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required!"),
    password: yup.string().required("Password is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const { response } = await loginAPI({ ...data });

    if (!response.access_token) {
      setError("Please, Try to enter different credentials");
      return;
    }

    setError(null);

    //destruct response
    const { access_token, user } = response;

    // setting token & username in auth context
    login(access_token, user.name, user.email);

    // navigating to home page
    navigate("/upload");

    // fill register form fields
    reset();
  };

  return (
    <>
      <Box p={3}>
        <Logo />
      </Box>
      <Container component="main" maxWidth="xs">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="70vh"
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register("email", { required: "Email is required" })}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("password", {
                      required: "Password is required",
                      minLength: 8,
                    })}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              {error && (
                <Typography variant="caption" color="red">
                  {error}
                </Typography>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    <NavLink
                      to="/register"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      Don't have an account? Sign up
                    </NavLink>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default LoginPage;
