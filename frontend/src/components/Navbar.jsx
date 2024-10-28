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
          justifyContent: "space-between",
          px: 4,
          pt: 2,
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
      <Box sx={{ p: 2 }}>
        <Divider sx={{ mx: 2, borderBottomWidth: 2 }} />
      </Box>
    </>
  );
}
