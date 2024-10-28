import { Typography, IconButton, Link, Stack } from "@mui/material";
import { EmojiHappy } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

export default function Sidebar() {
  const navigate = useNavigate();
  // TODO: Flag for active tab
  return (
    <Stack
      sx={{
        bgcolor: "white",
        height: "100vh",
        px: 2,
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Stack
          direction={{ md: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          padding={{ md: 2 }}
        >
          <Box
            component="img"
            src="/assets/icons/logo.svg"
            alt="Logo"
            sx={{ height: 40 }}
          />
          <Link
            underline="none"
            target="_blank"
            href="/"
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
                pr: 1,
              }}
            >
              BOOK
            </Typography>
            <Typography sx={{ fontWeight: "light", color: "black" }}>
              WORLD
            </Typography>
          </Link>
        </Stack>
        <List sx={{ color: "#C4C4C4" }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin")}>
              <ListItemIcon>
                <EmojiHappy />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin/books")}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin/authors")}>
              <ListItemIcon>
                <EmojiHappy />
              </ListItemIcon>
              <ListItemText primary="Authors" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/admin/stores")}>
              <ListItemIcon>
                <EmojiHappy />
              </ListItemIcon>
              <ListItemText primary="Stores" />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
      <Stack sx={{ px: 2, my: 1 }}>
        <Link
          underline="none"
          target="_blank"
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "#C4C4C4",
          }}
        >
          <IconButton color="inherit">
            <EmojiHappy />
          </IconButton>
          <Typography sx={{ ps: 3 }}>Log Out</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
