import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Wallpaper from "../home/images/homepicturetemporaria.png";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Rede Social Grupo 3
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Bem vindo à Rede Social Grupo 3.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver o feed de notícias.
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={Wallpaper} alt="" />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  );
}

export default Home;