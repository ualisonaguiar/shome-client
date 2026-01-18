import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function PaginaInicialPage() {
  return (
    <>
      {/* Conteúdo */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao Sistema
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gerencie seus dados de forma simples e eficiente
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Usuários</Typography>
              <Typography variant="body2">
                Gerencie usuários e permissões
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Relatórios</Typography>
              <Typography variant="body2">
                Visualize relatórios detalhados
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Configurações</Typography>
              <Typography variant="body2">
                Ajuste preferências do sistema
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
