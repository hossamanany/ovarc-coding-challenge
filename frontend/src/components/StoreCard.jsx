import { Card, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingCart } from "iconsax-react";

export default function StoreCard() {
  return (
    <Card
      sx={{
        bgcolor: "#FFF6F1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        m: 2,
        mt: 0,
        maxWidth: 180,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 0,
        }}
      >
        <Typography variant="h6" component="div">
          Cover Discovery
        </Typography>
        <Typography variant="body1" sx={{ color: "red", fontWeight: "bold" }}>
          $10.00
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            bgcolor: "#2374BF",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          size="small"
        >
          Sell
          <Box sx={{ ml: 1, display: "flex", alignItems: "center" }}>
            <ShoppingCart />
          </Box>
        </Button>
      </CardActions>
    </Card>
  );
}
