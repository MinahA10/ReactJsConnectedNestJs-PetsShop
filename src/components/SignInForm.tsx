import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { SvgIcon, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const defaultTheme = createTheme();

type LoginFormInputs = {
  email: string;
  password: string;
};

interface SignInFormProps {
  onSubmit: (data: LoginFormInputs) => void;
  loginImage: string;
}

export default function SignInForm({ onSubmit, loginImage }: SignInFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onHandleSubmit = (data: LoginFormInputs) => {
    onSubmit(data);
    console.log(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SvgIcon>
              <svg
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.002 330.002"
                xmlSpace="preserve"
              >
                {/* SVG content here */}
              </svg>
            </SvgIcon>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form onSubmit={handleSubmit(onHandleSubmit)}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "L'email est requis",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Adresse email invalide",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Le mot de passe est requis",
                    minLength: {
                      value: 8,
                      message:
                        "Le mot de passe doit contenir au moins 8 caractères",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Mot de passe"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.password}
                      helperText={
                        errors.password ? errors.password.message : ""
                      }
                    />
                  )}
                />
                <center>
                  <Button
                    name="login"
                    type="submit"
                    size="large"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: "fadeBlack.dark",
                      ":hover": {
                        bgcolor: "fadeBlack.light",
                      },
                    }}
                  >
                    Login
                  </Button>
                </center>
              </form>
            </Box>
            <Typography variant="body2" color="black" align="center">
              <Link color="inherit" href="/signUp" style={{ color: "black" }}>
                create new profile
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
