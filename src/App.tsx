import { Box } from "@mui/material";
import BarraSistema from "./components/barra-sistema";
import CollapsedBreadcrumbs from "./components/collapsed-beadcrumbs";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <BarraSistema />

      <Box sx={{ px: 3, py: 2 }}>
        <CollapsedBreadcrumbs />
        <AppRouter />
      </Box>
    </>
  );
}

export default App;
