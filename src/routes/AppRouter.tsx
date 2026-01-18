import { Route, Routes } from "react-router-dom";
import ListagemUsuarioPage from "../pages/usuario/ListagemUsuarioPage";
import PaginaInicialPage from "../pages/inicial";
import NovoUsuarioPage from "../pages/usuario/NovoUsuarioPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicialPage />} />

      <Route path="/usuario" element={<ListagemUsuarioPage />} />
      <Route path="/usuario/novo" element={<NovoUsuarioPage />} />
    </Routes>
  );
}
