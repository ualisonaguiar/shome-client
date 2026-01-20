import type { Usuario } from "../entities/Usuario";
import api, { getRequiredAuth } from "./api";

class UsuarioService {
  private contexto: string = "usuario";

  async adicionar(usuario: Usuario) {
    return api.post(
      this.contexto,
      this.criarPayload(usuario),
      getRequiredAuth(),
    );
  }

  async alterar(id: number, usuario: Usuario) {
    return api.put(
      `${this.contexto}/${id}`,
      this.criarPayload(usuario),
      getRequiredAuth(),
    );
  }

  private criarPayload(usuario: Usuario) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      ativo: usuario.ativo,
    };
  }
}

export default new UsuarioService();
