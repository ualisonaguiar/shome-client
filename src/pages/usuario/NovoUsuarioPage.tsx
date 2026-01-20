import { useState } from "react";

import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import type { Usuario } from "../../entities/Usuario";
import UsuarioService from "../../services/UsuarioService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MessageFormCampo from "../../components/messages/MessageFormCampo";
import { parseApiErrors } from "../../utils/parseApiErrors";

export default function NovoUsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    ativo: true,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string[] }>();

  //   const onSubmit: SubmitHandler<Usuario> = (data) => {
  //     event.preventDefault();

  //     const usuario = UsuarioService.adicionar();
  //   };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const acao = id
      ? UsuarioService.alterar(Number(id), usuario)
      : UsuarioService.adicionar(usuario);

    acao.then(
      () => {
        toast.success("Usuário criado com sucesso!");
        navigate("/usuarios");
      },
      (error) => {
        toast.error(error.response?.data?.message || "Erro ao salvar usuário");
        const apiErrors = error.response?.data?.errors || [];

        setErrors(parseApiErrors(apiErrors));
      },
    );
  };

  return (
    <>
      {/* Título */}
      <Typography variant="h5" gutterBottom>
        Novo Usuário
      </Typography>

      {/* Card do formulário */}
      <Paper
        elevation={2}
        sx={{ p: 3 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          {/* Nome */}
          <Grid item xs={12} md={5}>
            <TextField
              label="Nome"
              fullWidth
              required
              value={usuario.nome}
              onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            />
            {errors?.nome?.map((error: string, index: number) => (
              <MessageFormCampo key={index} message={error} />
            ))}
          </Grid>

          <Grid item xs={12} md={5}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={usuario.email}
              onChange={(e) =>
                setUsuario({ ...usuario, email: e.target.value })
              }
            />
            {errors?.email?.map?.((error, index) => (
              <MessageFormCampo key={index} message={error} />
            ))}
          </Grid>

          {/* Situação */}
          <Grid item xs={12} md={2}>
            <TextField
              label="Situação"
              select
              fullWidth
              value={usuario.ativo}
              onChange={(e) =>
                setUsuario({
                  ...usuario,
                  ativo: e.target.value === "true",
                })
              }
            >
              <MenuItem value="true">Ativo</MenuItem>
              <MenuItem value="false">Inativo</MenuItem>
            </TextField>
            {errors?.ativo?.map?.((error, index) => (
              <MessageFormCampo key={index} message={error} />
            ))}
          </Grid>
        </Grid>

        {/* Botões */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          sx={{ mt: 4 }}
        >
          <Button variant="outlined">Cancelar</Button>
          <Button type="submit" variant="contained" color="success">
            Salvar
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
