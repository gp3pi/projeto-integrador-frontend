import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import './Cadastro.css';

function Cadastro() {

  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        alert("Usuário cadastrado com sucesso");

        
      } catch (error) {
        console.log(`Error: ${error}`);

        
        alert("Usuário já existente");
      }
    } else {
      alert("Insira no miníno 8 caracteres na senha."); 

      setUser({ ...user, senha: "" }); 
      setConfirmarSenha(""); 
    }
  }
  return (
    <>
      <form onSubmit={onSubmit}>
      <Grid className="grid-cadastro" container sm={12}>
        <Box className="main-container">
          <Box className="container02">
            <Box  className="cadastro">
            
              <Typography className="title" variant="h3">
                Cadastre-se!
              </Typography>
            
              <Box className="textfield-container">
                <TextField
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  className="textfield"
                  type="text"
                  label="Nome"
                  name="nome"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className="icons" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  required
                />
              </Box>

              <Box className="textfield-container">
                <TextField
                  value={user.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  className="textfield"
                  name="usuario"
                  type="email"
                  label="E-mail"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className="icons" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  required
                />
              </Box>

              <Box className="textfield-container">
                <TextField
                  value={user.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  className="textfield"
                  type="text"
                  label="Link da foto"
                  name="foto"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ExitToAppIcon className="icons" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  required
                />
              </Box>

              <Box className="textfield-container">
                <TextField
                  value={user.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  className="textfield"
                  type="password"
                  label="Senha"
                  name="senha"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className="icons" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  required
                />
              </Box>

              <Box className="textfield-container">
                <TextField
                  value={confirmarSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    confirmarSenhaHandle(e)
                  }
                  className="textfield"
                  type="password"
                  label="Confirmar Senha"
                  name="confirmarSenha"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className="icons" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  required
                />
              </Box>
             

              <Box className="links">
                <Link className="link" to="/login">
                  Já é cadastrado?
                </Link>
              </Box>

              <Box className="button-container">
                <Button type="submit" className="button" variant="contained">
                  CADASTRAR
                </Button>
              </Box>
            </Box>
          </Box>
             
          <Box className="container01">
            <img className="img-cadastro" src="https://cdn.discordapp.com/attachments/710276943592816720/1018934632038813826/cadastro.png" alt="signup" />
          </Box>
        </Box>
        
      </Grid>
      </form>   
    </>
  );
}

export default Cadastro;
