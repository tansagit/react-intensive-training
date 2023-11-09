import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useShoppingCart } from "../hooks/useShoppingCart";

export default function CartItem({ item }) {
  const { updateCartItem } = useShoppingCart();
  const handleChangeAmmout = event => {
    updateCartItem(item.id, Number(event.target.value));
  };

  return (
    <Card
      sx={{
        display: "flex",
        marginBottom: 2,
        width: 1,
      }}>
      <CardMedia
        component="img"
        sx={{ width: 170 }}
        image={item.productImage}
        alt=""
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography component="div" variant="h5">
            {item.productName}
          </Typography>
          <Typography component="div" variant="h5">
            Cost: ${(item.amount * item.price).toFixed(0)}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <TextField
            type="number"
            defaultValue={item.amount}
            onChange={handleChangeAmmout}
            inputProps={{ min: 0, max: 100 }}></TextField>
        </Box>
      </Box>
    </Card>
  );
}
