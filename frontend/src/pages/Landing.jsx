import { Button, Stack, Typography } from "@mui/material";
import BookCard from "../components/BookCard";
import AuthorCard from "../components/AuthorCard";
import StoreCard from "../components/StoreCard";

export default function Landing() {
  return (
    <Stack>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ px: 4, py: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Browse by Stores
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "#D86128" }}>
          View All
        </Button>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} sx={{ mx: 4 }}>
        <StoreCard />
      </Stack>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ px: 4, py: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Browse by Authors
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "#D86128" }}>
          View All
        </Button>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} sx={{ mx: 4 }}>
        <AuthorCard />
      </Stack>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ px: 4, py: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Browse by Books
        </Typography>
        <Button variant="contained" sx={{ bgcolor: "#D86128" }}>
          View All
        </Button>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} sx={{ mx: 4 }}>
        <BookCard />
      </Stack>
    </Stack>
  );
}
