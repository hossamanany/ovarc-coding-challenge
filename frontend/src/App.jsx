import { useRoutes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Grid from "@mui/material/Grid";
import routes from "./routes.jsx";

function App() {
  const content = useRoutes(routes);
  return (
    <Grid container sx={{ bgcolor: "#F1F1F1" }} height="100vh">
      <Grid item xs={12} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        <Navbar />
        {content}
      </Grid>
    </Grid>
  );
}

export default App;
