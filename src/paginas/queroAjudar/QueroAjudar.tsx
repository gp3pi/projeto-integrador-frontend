import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./QueroAjudar.css";
import { Box } from "@mui/material";
import { Button, Grid, TextField} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function QueroAjudar() {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
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

  function enviar() {
    toast.success('Formulario enviado com sucesso!', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
      });

      navigate('/home')
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "silver" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <h2>Entre em Contato!</h2>

            <TextField
              
              id="filled-basic"
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

            <TextField
              
              id="filled-basic"
              type="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />

            <TextField
              
              id="outlined-multiline-static"
              name="assunto"
              label="Assunto"
              margin="normal"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              className="btn02"
              type="submit"
              variant="contained"
              color="primary"
              
            >
              Enviar
            </Button>
          </Box>
        </Grid>
        <Grid className="imagem5" item xs={6}></Grid>
      </Grid>
    </>
  );
}

export default QueroAjudar;