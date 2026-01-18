import Container from "@mui/material/Container";
import BarraSistema from "./components/barra-sistema";
import CollapsedBreadcrumbs from "./components/collapsed-beadcrumbs";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <BarraSistema />
      <Container sx={{ mt: 4 }}>
        <CollapsedBreadcrumbs />
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
