import { Route, Routes } from "react-router-dom";
import ListagemUsuarioPage from "../pages/usuario/listagem.usuario";
import PaginaInicialPage from "../pages/inicial";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicialPage />} />

      <Route path="/usuario" element={<ListagemUsuarioPage />} />
    </Routes>
  );
}
