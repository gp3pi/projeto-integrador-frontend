import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usuário deslogado', {
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

  var navbarComponent;

  if (token != "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
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
            
          </Box>

          <Box className="font" display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={2} className="cursor">
                <Typography variant="h6" className="colornav">
                  HOME
                </Typography>
              </Box>
            </Link>
            
            <Link to="/ajudar" className="text-decorator-none">
              <Box mx={2} className="cursor">
                <Typography variant="h6" className="colornav">
                  QUERO AJUDAR
                </Typography>
              </Box>
            </Link>

            <Box mx={2} className="cursorp" onClick={goLogout}>
              <Typography variant="h6" className="colornav">
                LOGOUT
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <>{navbarComponent}</>
  );
}

export default Navbar;
