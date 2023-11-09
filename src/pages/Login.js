import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const { login, isAuth } = useAuth();
  const [isInvalid, setIsInValid] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const user = {
      userName: formData.get("username"),
      password: formData.get("password"),
    };
    if (!isAuth(user)) {
      setIsInValid(true);
      return;
    }
    login(user);
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoComplete="User name"
            autoFocus
            error={isInvalid}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={isInvalid}
          />
          {isInvalid && (
            <Typography variant="p" color="error">
              Username or password incorrect!!!
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup"> Don't have an account? Sign Up </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
