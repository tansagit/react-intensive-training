import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";

export default function OrderResult() {
  return (
    <ProtectedLayout>
      <Box>
        <Typography variant="div" align="center" alignItems="center">
          Your order has been placed successfully.
          <Link to="/">Back to shopping more.</Link>
        </Typography>
      </Box>
    </ProtectedLayout>
  );
}
