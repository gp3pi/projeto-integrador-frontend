import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./DeletarPostagem.css";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const [post, setPosts] = useState<Postagem>();

  useEffect(() => {
    if (token === "") {
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
    buscaId(`/postagem/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function sim() {
    navigate("/posts");

    try {
      await deleteId(`/postagem/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Postagem deletada com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      alert("Erro ao deletar");
    }
  }

  function nao() {
    navigate("/posts");
  }

  return (
    <>
      <Box className="tamanhoPost" m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <Box className="divisoria-container">
            <Box className="divisoriaDel" ></Box>
          </Box>
          <CardActions className="delete-cardaction">
            <Box className="deletebtn-container" display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box>
                <Button className="deletebutton" onClick={sim} variant="contained" size='large' color="primary">
                  <DeleteIcon className="deleteicons" />
                </Button>
              </Box>
              <Box>
                <Button className="deletebutton" onClick={nao} variant="contained" size='large' color="secondary">
                  <ArrowBackIcon className="deleteicons" />
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;
