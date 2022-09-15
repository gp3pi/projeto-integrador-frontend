import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca, post } from "../../../services/Service";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ListaPostagem.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/tokensReducer";
import TabPostagem from "../tabPostagem/TabPostagem";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
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

  async function getPost() {
    await busca("/postagem", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box className="card-container" m={2}>
          <Card className="listPost" variant="outlined">
            <CardContent className="card-content">

              <Box className="user-box">
                <img className="user-foto" src={post.usuario?.foto} alt="" />
                <Box className="user-container">
                  <Typography className="user-nome" variant="h5">{post.usuario?.nome}</Typography>
                  <Typography className="user-usuario" variant="body2" >{post.usuario?.usuario}</Typography>
                </Box>
              </Box>

              <Box>
                <Typography className='titleList' variant="h5" component="p">
                  {post.tema?.titulo}
                </Typography>
              </Box>

              <Box className="img-card">
                <img className="img-post" src={post.imagem} alt="" />
              </Box>

              <Box>
                <Typography className="titleList" variant="h5" component="h2">
                  {post.titulo}
                </Typography>
              </Box>

              <Box>
                <Typography className="titleList" variant="body2" component="p">
                  {post.texto}
                </Typography>
              </Box>

            </CardContent>

            <Box className="divisoria"></Box>

            <CardActions className="card-actions">
              <Box className="btn-container" display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="post-btn" size='small'>
                      <CreateIcon className="post-icones" />
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button className="post-btn" variant="contained" size='small'>
                      <CloseIcon className="post-icones" />
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))
      }
    </>
  );
}

export default ListaPostagem;
