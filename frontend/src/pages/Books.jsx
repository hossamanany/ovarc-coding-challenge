import Grid from "@mui/material/Grid2";
import { Typography, Stack, Button } from "@mui/material";
import EnhancedTable from "../components/EnhancedTable";
import SearchBar from "../components/SearchBar";

const columns = [
  { id: "BookID", label: "Book ID", numeric: true },
  { id: "BookName", label: "Book Name", numeric: false },
  { id: "Pages", label: "Pages", numeric: true },
  { id: "Author", label: "Author", numeric: false },
  { id: "Price", label: "Price", numeric: true },
];

const data = [
  { BookID: 1, BookName: "Book 1", Pages: 100, Author: "Author A", Price: 10 },
  { BookID: 2, BookName: "Book 2", Pages: 150, Author: "Author B", Price: 15 },
];

export default function Books() {
  return (
    <Grid sx={{ px: 4, py: 2 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", mr: 4 }}>Books List</Typography>
          <SearchBar />
        </Stack>
        <Button variant="contained" sx={{ bgcolor: "#D86128" }}>
          Add New Book
        </Button>
      </Stack>
      <Stack sx={{ my: 4 }}>
        <EnhancedTable columns={columns} data={data} />
      </Stack>
    </Grid>
  );
}
