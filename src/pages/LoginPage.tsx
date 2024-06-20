import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const defaultTheme = createTheme();

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Add your login logic here
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  );
};

export default LoginPage;
