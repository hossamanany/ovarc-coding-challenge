import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/material";

export default function AuthorCard() {
  return (
    <Card>
      <Grid container>
        <Grid item md={4}>
          <CardMedia
            sx={{ height: 140 }}
            // image={book?.image}
            title="green iguana"
          />
        </Grid>
        <Grid
          // key={`${book?.name}-${book?.publishedBooks}-${index}`}
          item
          md={8}
        >
          <Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {book?.name} */}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                by {/* Publish books: {book?.author} */}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                stores:
              </Typography>
            </CardContent>
            {/* {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))} */}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
