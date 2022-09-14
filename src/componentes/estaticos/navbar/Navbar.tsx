import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  function goLogout() {
    alert("Usuário deslogado");
    navigate("/login");
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" className="colornav">
              <div className="logo">
                <Link to="/sobrenos">
                  <picture>
                    <img
                      src="https://i.imgur.com/PWIeTfO.jpg"
                      alt=""
                      width="85px"
                      className="cursorp"
                    />
                  </picture>
                </Link>
              </div>
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className="colornav">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className="colornav">
                  Postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className="colornav">
                  Temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" className="colornav">
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursorp" onClick={goLogout}>
              <Typography variant="h6" className="colornav">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
