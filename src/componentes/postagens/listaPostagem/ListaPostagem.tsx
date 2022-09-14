import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
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
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
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
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
              </Box>

              <Box className="img-card">
                <img className="img-post" src={post.imagem} />
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

              <Box>
                <Typography className="titleList" variant="body2" component="p">
                  {post.tema?.titulo}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
