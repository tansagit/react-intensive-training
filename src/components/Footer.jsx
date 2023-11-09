import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        React intensive practice
      </Typography>
    </Box>
  );
}
