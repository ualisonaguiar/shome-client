import { useState } from "react";
import type { FiltroUsuario } from "../../entities/FiltroUsuario";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ListagemUsuarioPage() {
  const [filtro, setFiltro] = useState<FiltroUsuario>({
    nome: "",
    email: "",
    ativo: "",
  });

  return (
    <>
      {/* Título */}
      <Typography variant="h5" gutterBottom>
        Usuários
      </Typography>

      {/* Card de Filtro */}
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField
              label="Nome"
              fullWidth
              value={filtro.nome}
              onChange={(e) => setFiltro({ ...filtro, nome: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Email"
              fullWidth
              value={filtro.email}
              onChange={(e) => setFiltro({ ...filtro, email: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              label="Situação"
              select
              fullWidth
              value={filtro.ativo}
              onChange={(e) => setFiltro({ ...filtro, ativo: e.target.value })}
              sx={{ minWidth: 160 }}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="true">Ativo</MenuItem>
              <MenuItem value="false">Inativo</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-end">
          <Grid item>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success">
                Pesquisar
              </Button>
              <Button variant="outlined">Limpar</Button>

              <Button
                variant="contained"
                component={RouterLink}
                to="/usuarios/novo"
              >
                Novo
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Aqui entra a tabela depois */}
      <Paper sx={{ p: 2 }}>
        <Typography color="text.secondary">
          Tabela de usuários (em construção)
        </Typography>
      </Paper>
    </>
  );
}
