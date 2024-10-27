import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function AuthorCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid container>
        <Grid item md={4}>
          <CardMedia
            sx={{ height: 140 }}
            // image={author?.image}
            title="green iguana"
          />
        </Grid>
        <Grid
          // key={`${author?.name}-${author?.publishedBooks}-${index}`}
          item
          md={4}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {/* {author?.name} */}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {/* Publish books: {author?.publishedBooks} */}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item md={4}>
          <CardActions>
            <Button size="small">View Profile</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
