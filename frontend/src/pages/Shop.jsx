import Grid from "@mui/material/Grid2";
import { Typography, Stack } from "@mui/material";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

export default function Shop() {
  return (
    <Grid container sx={{ px: 4, py: 2, width: "100%" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Browse Books
        </Typography>
        <SearchBar />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 2,
          width: "100%",
        }}
      >
        <Typography variant="body1" sx={{ mx: 1 }}>
          Author
        </Typography>
        {/* <Filter /> */}
        <Typography variant="body1" sx={{ mx: 1 }}>
          Store
        </Typography>
        {/* <Filter /> */}
        {/* <Sort /> */}
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2, width: "100%" }}>
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
