import { Route, Routes } from "react-router-dom";
import ListagemUsuarioPage from "../pages/usuario/ListagemUsuarioPage";
import PaginaInicialPage from "../pages/inicial";
import NovoUsuarioPage from "../pages/usuario/NovoUsuarioPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicialPage />} />

      <Route path="/usuarios" element={<ListagemUsuarioPage />} />
      <Route path="/usuarios/novo" element={<NovoUsuarioPage />} />
    </Routes>
  );
}
