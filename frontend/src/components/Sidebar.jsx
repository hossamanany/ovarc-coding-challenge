import { Typography, IconButton, Link, Stack } from "@mui/material";
import { EmojiHappy } from "iconsax-react";
import logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

export default function Sidebar() {
  const navigate = useNavigate();
  // TODO: Flag for active tab
  return (
    <Stack
      sx={{ bgcolor: "white", height: "100vh", px: 2 }}
      position="relative"
    >
      <Stack sx={{ my: 4 }}>
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
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: 8, height: "40px" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              display: "inline",
              color: "black",
              pr: 1,
            }}
          >
            BOOK
          </Typography>
          <Typography
            sx={{ fontWeight: "light", display: "inline", color: "black" }}
          >
            WORLD
          </Typography>
        </Link>
      </Stack>
      <List sx={{ color: "#C4C4C4" }}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <EmojiHappy />
            </ListItemIcon>
            <ListItemText primary="Shop" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/books")}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Books" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/authors")}>
            <ListItemIcon>
              <EmojiHappy />
            </ListItemIcon>
            <ListItemText primary="Authors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/stores")}>
            <ListItemIcon>
              <EmojiHappy />
            </ListItemIcon>
            <ListItemText primary="Stores" />
          </ListItemButton>
        </ListItem>
      </List>
      <Stack sx={{ px: 2, my: 1, bottom: 0 }} position="absolute">
        <Link
          underline="none"
          target="_blank"
          //   onClick={}
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
