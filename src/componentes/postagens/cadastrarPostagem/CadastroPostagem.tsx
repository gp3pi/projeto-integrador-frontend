import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import { busca, buscaId, post, put } from "../../../services/Service";

function CadastrarPostagem() {

let navigate = useNavigate();
const [token, setToken] = useLocalStorage('token');
const [temas, setTemas] = useState<Tema[]>([]);
const { id } = useParams<{ id: string }>();

useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    titulo: "",
    descricao: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagem/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("postagem " + JSON.stringify(postagem));

    // Se o ID for diferente de indefinido tente Atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/postagem`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        alert("Postagem atualizado com sucesso");

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/postagem`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        alert("Postagem cadastrado com sucesso");

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    }
    back();
  }

  function back() {
    navigate("/posts");
  }

  return (
    <Box className="tamanhoPost">
      <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
          >
            Cadastro de Postagem
          </Typography>
          <TextField
            className="titleList"
            value={postagem.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="titulo"
            label="Titulo"
            variant="outlined"
            name="titulo"
            margin="normal"
            fullWidth
          />
          <TextField
            className="titleList"
            value={postagem.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="texto"
            label="Texto"
            name="texto"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <FormControl className="titleList" fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Temas </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                buscaId(`/temas/${e.target.value}`, setTema, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {temas.map((tema) => (
                <MenuItem value={tema.id}>{tema.titulo}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button type="submit" variant="contained" color="primary">
              Finalizar
            </Button>
          </FormControl>
        </form>
      </Container>
    </Box>
  );
}
export default CadastrarPostagem;