import { Grid, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../componentes/postagens/tabPostagem/TabPostagem";
import ModalTema from "../../componentes/temas/modalTema/ModalTema";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate("/login");
    }
  }, [token]);

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

            <Box
              className="botao-container"
              display="flex"
              justifyContent="center"
            >

                <Box>
                  <ModalPostagem/>
                </Box>
              
                <Box>
                  <ModalTema/>
                </Box>

            </Box>

          </Box>
        </Grid>
        <Grid className="home-container02" item xs={8}>
          <img
            className="img-home"
            src="https://cdn.discordapp.com/attachments/710276943592816720/1018949366075097120/pi-home.png"
            alt="dialogo"
          />
        </Grid>
        <Grid xs={12} >
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
