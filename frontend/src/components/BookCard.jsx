import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StoreCard from "./StoreCard";
import PropTypes from "prop-types";

export default function BookCard({ book }) {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <CardMedia
            component="img"
            // image={book?.image}
            image="/assets/book.png"
            title="green iguana"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography variant="h6" component="div">
              {book?.name}
              To Kill a Mockingbird
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              by {book?.author?.name}
            </Typography>
          </CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary", px: 2 }}>
            stores:
          </Typography>
          {/* {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))} */}
          <StoreCard />
        </Grid>
      </Grid>
    </Card>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
