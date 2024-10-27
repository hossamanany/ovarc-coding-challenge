import Grid from "@mui/material/Grid2";
import { Typography, Stack } from "@mui/material";
import BookCard from "../components/BookCard";

export default function Shop() {
  return (
    <Grid sx={{ px: 4, py: 2 }}>
      <Stack direction="row">
        <Typography sx={{ fontWeight: "bold" }}>Browse Books</Typography>
        {/* <Search /> */}
      </Stack>
      <Stack direction="row" sx={{ mt: 2 }}>
        {/* <Filter /> */}
        {/* <Sort /> */}
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {/* {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))} */}
          <BookCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
