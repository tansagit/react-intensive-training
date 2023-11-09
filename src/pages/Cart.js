import { Box, Button, Container, Typography } from "@mui/material";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { useShoppingCart } from "../hooks/useShoppingCart";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();

  const calculateTotal = items =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <ProtectedLayout>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h3" sx={{ py: 2 }}>
            Your Shopping Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography variant="p">No items in cart.</Typography>
          ) : null}
          {cartItems.map(item => (
            <CartItem key={item.id} item={item}></CartItem>
          ))}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="h4" align="right">
              Total: ${calculateTotal(cartItems).toFixed(0)}
            </Typography>
            <Button
              onClick={() => {
                navigate("/checkout");
              }}
              variant="contained"
              sx={{ marginLeft: 2 }}
              disabled={cartItems.length === 0}>
              CHECK OUT
            </Button>
          </Box>
        </Box>
      </Container>
    </ProtectedLayout>
  );
}
