import {
  Breadcrumbs,
  Stack,
  Link,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import User from "./User.jsx";
import { useLocation, Link as RouterLink } from "react-router-dom";

// TODO: Fix breadcrumbs to be dynamic
export default function Navbar() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const currentTabName = pathnames[0]
    ? pathnames[0].charAt(0).toUpperCase() + pathnames[0].slice(1)
    : "Shop";
  const title = currentTabName === "Shop" ? "Shop" : `${currentTabName}`;

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          padding: 4,
        }}
      >
        <Stack>
          <Typography variant="h6">{title}</Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link
              underline="hover"
              color="inherit"
              component={RouterLink}
              to="/"
            >
              Admin
            </Link>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Typography key={to} color="text.primary">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Typography>
              ) : (
                <Link
                  underline="hover"
                  color="inherit"
                  component={RouterLink}
                  to={to}
                  key={to}
                >
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Stack>
        <User />
      </Stack>
      <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
        <Divider sx={{ mx: 2 }} />
      </Box>
    </>
  );
}
