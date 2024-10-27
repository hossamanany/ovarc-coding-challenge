import Grid from "@mui/material/Grid2";
import { Typography, Stack, Button } from "@mui/material";
import TableView from "../components/TableView";
import StoreCard from "../components/StoreCard";

export default function Stores() {
  return (
    <Grid sx={{ px: 4, py: 2 }}>
      <Stack direction="row">
        <Typography sx={{ fontWeight: "bold" }}>Stores List</Typography>
        {/* <Search /> */}
        <Button variant="contained" color="primary">
          Add New Store
        </Button>
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TableView />
          <StoreCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
