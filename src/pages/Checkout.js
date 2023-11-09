import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { useAuth } from "../hooks/useAuth";
import { useShoppingCart } from "../hooks/useShoppingCart";

export default function Checkout() {
  const { user } = useAuth();
  const { checkout } = useShoppingCart();
  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const order = {
      name: formData.get("name"),
      address: formData.get("address"),
      status: "IN_PROGRESS",
    };
    checkout(order);
  };

  return (
    <ProtectedLayout>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
        </Box>

        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                defaultValue={user.firstName + " " + user.lastName}
                required
              />

              <TextField
                id="address"
                name="address"
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />

              <TextField
                label="Credit Card Number"
                id="cardNumber"
                name="cardNumber"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 16 }}
                required
              />

              <TextField
                label="CVV"
                id="cvv"
                name="cvv"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 3 }}
                required
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Month"
                    id="expiryMonth"
                    name="expiryMonth"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 1, max: 12 }}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="expiryYear"
                    name="expiryYear"
                    label="Expiry Year"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 2023 }}
                    required
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}>
                Order Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ProtectedLayout>
  );
}
