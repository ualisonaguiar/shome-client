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

export default function NovoUsuarioPage() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    email: "",
    ativo: true,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Usuário enviado:", usuario);
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
