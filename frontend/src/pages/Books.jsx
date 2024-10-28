import Grid from "@mui/material/Grid2";
import { Typography, Stack, Button } from "@mui/material";
import BookCard from "../components/BookCard";
import TableView from "../components/TableView";
import SearchBar from "../components/SearchBar";

export default function Books() {
  return (
    <Grid sx={{ px: 4, py: 2 }}>
      <Stack direction="row">
        <Typography sx={{ fontWeight: "bold" }}>Books List</Typography>
        <SearchBar />
        <Button variant="contained" color="primary">
          Add New Book
        </Button>
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TableView />
          <BookCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
