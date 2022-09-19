import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { busca } from "../../../services/Service";
import Tema from "../../../models/Tema";
import "./ListaTemas.css";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/tokensReducer";
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <>
      {temas.map((tema) => (
        <Box className="container-temas" m={2}>
          <Card className="cardcontainer-temas" variant="outlined">
            <Box className="content-temas">
              <CardContent>
                <Typography
                  className="titleList"
                  color="textSecondary"
                  gutterBottom
                >
                  Tema
                </Typography>
                <Typography className="temas-title" variant="h5" component="h2">
                  {tema.titulo}
                </Typography>
                <Typography className="titleList" variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <Box className="temas-divisoria"></Box>
              <CardActions className="temas-actions" >
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        className="temas-btn"
                        variant="contained"
                        size="small"

                      >
                        <CreateIcon className="temas-icones" />
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button className="temas-btn" variant="contained" size="small">
                        <CloseIcon className="temas-icones" />
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Box>
            <Box className="img-linha01"></Box>
            <Box className="img-linha02"></Box>
            <Box className="imagem-temas">
              <img className="img-tema" src={tema.imagemTema} alt="" />
            </Box>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
