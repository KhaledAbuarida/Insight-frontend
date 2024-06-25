import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerAPI } from "../api/authAPI";
import { useState } from "react";

const RegisterPage = () => {
  // states
  const [error, setError] = useState<string | null>(null);

  // navigation
  const navigate = useNavigate();

  // form validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Username is required, try enter username"),
    email: yup.string().email().required("Email is required, try enter email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmation_password: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    setError(null);
    const { status } = await registerAPI({ ...data });

    if (status !== 201) {
      setError("can't register with this email, please try different email");
      return;
    }

    setError("User Successfully Registered");

    // navigating to home page
    navigate("/login");

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
          height="60vh"
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Typography variant="caption" gutterBottom>
              Please fill out this form to create an account!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    type="text"
                    label="Username"
                    fullWidth
                    {...register("name")}
                  />
                  {errors.name && (
                    <Typography variant="caption" color="red">
                      {errors.name.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    label="Email"
                    fullWidth
                    {...register("email")}
                  />
                  {errors.email && (
                    <Typography variant="caption" color="red">
                      {errors.email.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    {...register("password")}
                  />
                  {errors.password && (
                    <Typography variant="caption" color="red">
                      {errors.password.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    label="Confirm Password"
                    fullWidth
                    {...register("confirmation_password")}
                  />
                  {errors.confirmation_password && (
                    <Typography variant="caption" color="red">
                      {errors.confirmation_password.message}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
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
                      to="/login"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      Already have an account? Sign in
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

export default RegisterPage;
