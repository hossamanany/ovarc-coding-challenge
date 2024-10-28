import Grid from "@mui/material/Grid2";
import { Typography, Stack } from "@mui/material";
import SearchBar from "../components/SearchBar";
// import BookCard from "../components/BookCard";
// import apiRequests from "../apiRequestst";
// import { useQuery } from "react-query";

export default function BooksView() {
  // const { data: books, isLoading: areBooksLoading } = useQuery(
  //   "fetchAllBooks",
  //   () => apiRequests.fetchAllBooks()
  // );

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
        {/* {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))} */}
      </Grid>
    </Grid>
  );
}
