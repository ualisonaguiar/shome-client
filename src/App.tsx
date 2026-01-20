import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
