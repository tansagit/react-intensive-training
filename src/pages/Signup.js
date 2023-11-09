import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function SignUp() {
  const { signUp, isExisted } = useAuth();
  const [isInValid, setIsInValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      userName: data.get("username"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    if (isExisted(user.userName)) {
      setIsInValid(true);
      setErrorMessage("Username is already exists.");
      return;
    }

    const confirmPassword = data.get("confirmPassword");
    if (user.password !== confirmPassword) {
      setIsInValid(true);
      setErrorMessage("Confirm password not match.");
      return;
    }

    signUp(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={isInValid}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={isInValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                error={isInValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={isInValid}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="repeat-password"
                error={isInValid}
              />
            </Grid>

            {isInValid && (
              <Grid xs={12} paddingLeft="16px" paddingTop="8px">
                <Typography variant="p" color="error">
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
