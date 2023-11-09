import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useShoppingCart } from "../hooks/useShoppingCart";

export default function ProductItem({ data }) {
  const { cartItems, addToCart } = useShoppingCart();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: "56.25%",
          objectFit: "contain",
          marginLeft: "auto",
          marginRight: "auto",
          width: "56.25%",
        }}
        image={data.productImage}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {data.productName}
        </Typography>
        <Typography gutterBottom variant="h6">
          ${data.price}
        </Typography>
        <Typography>{data.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="Add to cart"
          onClick={() => {
            addToCart(data);
          }}
          sx={{ ml: 0 }}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
