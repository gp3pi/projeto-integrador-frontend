import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import User from "../../../models/User";
import { busca, buscaId, post, put } from "../../../services/Service";
import { UserState } from "../../../store/tokens/tokensReducer";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import './CadastroPostagem.css';

function CadastrarPostagem() {
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const userId = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  const [temas, setTemas] = useState<Tema[]>([]);
  const { id } = useParams<{ id: string }>();

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

  const [tema, setTema] = useState<Tema>({
    id: 0,
    titulo: "",
    descricao: "",
    imagemTema: ""
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    imagem: "",
    data: "",
    tema: null,
    usuario: null
  });
  const [user,setUser] = useState<User>({
    id: +userId,
    nome: "",
    senha: "",
    foto: "",
    usuario:"",
  })

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
      usuario: user
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

        toast.success('Postagem atualizada com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.info('Verifique a quantidade de caracteres e o preenchimento dos campos!', {
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

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/postagem`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Postagem cadastrada com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
          });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error('Verifique a quantidade de caracteres e o preenchimento dos campos!', {
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
            Formulário
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

          <TextField
            className="titleList"
            value={postagem.imagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="imagem"
            label="Imagem"
            variant="outlined"
            name="imagem"
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
            <Button className="okbutton" type="submit" variant="contained" color="primary">
              <DoneAllIcon className="checkicon"/>
            </Button>
          </FormControl>
        </form>
      </Container>
    </Box>
  );
}
export default CadastrarPostagem;
