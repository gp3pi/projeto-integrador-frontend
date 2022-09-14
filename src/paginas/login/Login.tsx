import React, { useState, useEffect, ChangeEvent } from "react";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid className="grid" container sm={12}>
          <Box className="main-container">
            <Box className="container01">

              <img
                className="img"
                src="https://cdn.discordapp.com/attachments/710276943592816720/1018932683428073592/login.png"
                alt="signin"
              />
            </Box>

            <Box className="container02">
              <Box className="login">
                <img
                  className="profile-img"
                  src="https://cdn.discordapp.com/attachments/710276943592816720/1014738564476571688/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                  alt=""
                />

                <Typography className="title" variant="h3">
                  Bem-vindo!
                </Typography>

                <Box className="textfield-container">

                  <TextField
                    value={userLogin.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    className="textfield"
                    type="email"
                    name="usuario"
                    label="E-mail"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon className="icons" />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"

                  />

                </Box>

                <Box className="textfield-container">

                  <TextField
                    value={userLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    className="textfield"
                    type="password"
                    name="senha"
                    label="Senha"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon className="icons" />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                </Box>



                <Box className="links">
                  <Link className="link" to="/cadastro">
                    Não é registrado?
                  </Link>

                  <Link className="link" to="">
                    Esqueci minha senha
                  </Link>
                </Box>

                <Box className="button-container">
                  <Button type="submit" className="button" variant="contained">
                    LOGIN
                  </Button>
                </Box>

              </Box>

            </Box>

          </Box>


        </Grid>
      </form>
    </>
  );
}

export default Login;
