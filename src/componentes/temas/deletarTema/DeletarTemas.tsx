import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";
import Tema from "../../../models/Tema";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import './DeletarTema.css'

function DeletarTemas() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>();

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

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/temas");
    deleteId(`/temas/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success('Tema deletado com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    navigate("/temas");
  }

  return (
    <>
      <Box className="tamanhoPost" m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{tema?.titulo}</Typography>
              <Typography color="textSecondary">{tema?.descricao}</Typography>
            </Box>
          </CardContent>
          <Box className="divisoria-container">
          <Box className="divisoriaDel"></Box>
          </Box>
          <CardActions>
            <Box className="deletebtn-container" display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  className="deletebuttons"
                  onClick={sim}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  <DeleteIcon className="deleteicons"/>
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  className="deletebuttons"
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  <ArrowBackIcon className="deleteicons"/>
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTemas;
