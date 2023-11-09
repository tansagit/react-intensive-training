import { ProtectedLayout } from "../components/ProtectedLayout";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../hooks/useAuth";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Profile() {
  const { user, update } = useAuth();
  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      userName: user.userName,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
    };
    update(data);
    alert("Updated");
  };
  return (
    <ProtectedLayout>
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
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="User name"
              name="username"
              disabled={true}
              value={user.userName}
            />
            <TextField
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              defaultValue={user.firstName}
            />
            <TextField
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              defaultValue={user.lastName}
            />
            <TextField
              margin="normal"
              fullWidth
              id="phone"
              label="Phone number"
              name="phone"
              defaultValue={user.phone}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Update profile
            </Button>
          </Box>
        </Box>
      </Container>
    </ProtectedLayout>
  );
}
