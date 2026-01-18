import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function CollapsedBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Incio
      </Link>
      <Typography sx={{ color: "text.primary" }}>Inicio</Typography>
    </Breadcrumbs>
  );
}
