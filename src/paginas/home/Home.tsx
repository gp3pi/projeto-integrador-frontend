import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";

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
        <Grid alignItems="center" item xs={4}>
          <Box className="home-container01">
            <Typography
              variant="h1"
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              TELK
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="subtitulo"
            >
              Não importa onde,<br></br>
              Não importa quando.<br></br>
              Aqui, a sua conexão faz a diferença.
            </Typography>
            <Box className="botao-container" display="flex" justifyContent="center">
            <Button variant="outlined" className="botao-temas">
              Temas
            </Button>
            <Button variant="outlined" className="botao-postagens">
              Postagens
            </Button>
          </Box>
          </Box>
          
        </Grid>
        <Grid className="home-container02" item xs={8}>
        <img className="img-home" src="https://cdn.discordapp.com/attachments/710276943592816720/1018949366075097120/pi-home.png" alt="dialogo"/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;