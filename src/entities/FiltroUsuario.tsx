export interface FiltroUsuario {
  nome: string;
  email: string;
  ativo: "" | "true" | "false";
  dataInicio: Date | null;
  dataFim: Date | null;
}
