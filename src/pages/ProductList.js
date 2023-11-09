import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { PRODUCTS } from "../data/products";
import ProductItem from "./ProductItem";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProductList() {
  return (
    <ProtectedLayout>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}>
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom>
            Anything to sell display here
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="xl">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {PRODUCTS.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductItem data={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProtectedLayout>
  );
}
