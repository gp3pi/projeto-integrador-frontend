import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./QueroAjudar.css";
import { Box } from "@mui/material";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button, Grid, TextField} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function QueroAjudar() {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

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

  function enviar() {
    toast.success('Formulario enviado com sucesso!', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
      });

      navigate('/home')
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{background: 'pink'}} paddingX={5}>
            
            <a href="https://www.anjosdanoite.org.br/" 
            target='blank'>
           <img src="https://www.anjosdanoite.org.br/imagens/logo.png" alt="" />
            </a>
            <br />
            Banco do Brasil : Agência 1812-0 <br /> 
            Conta : 940709-X - <br />
            Núcleo Assistêncial Anjos da Noite <br />
            CNPJ: 67.637.231/0001-81
            
          </Box>
          
            <Box style={{background: 'white'}} paddingX={120}>
            <a href="https://sbsrj.org.br/doe-agora/">
              <img src="https://sbsrj.org.br/wp-content/uploads/2021/08/cropped-SBS-LOGO-196x96.png" alt="" />
            </a>
            <br />
            
            <a
            href="https://www.instagram.com/sbsolidariedade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: 30, color: "black" }} />
          </a>
            <a
            href="https://www.facebook.com/SBsolidariedade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ fontSize: 30, color: "black" }} />
          </a>
            </Box>
          

          
            <Box style={{background: 'pink'}} paddingX={5}>
            <a href="https://pontodeamor.ong.br/">
              <img src="https://pontodeamor.ong.br/wp-content/uploads/2021/03/Ponto-de-Amor-Logo-e1655775536281-300x184.png" alt="" />
            </a>
            <p>
            
            <a
            href="https://api.whatsapp.com/send/?phone=5548988451057&text=Ol%C3%A1%21+tudo+bem%3F+Vim+atrav%C3%A9s+so+site+da+ONG.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon style={{ fontSize: 30, color: "black" }} />
          </a>    


            <a
            href="https://www.instagram.com/ong_pontodeamor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: 30, color: "black" }} />
          </a>
            <a
            href="https://www.facebook.com/pontodeamorong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ fontSize: 30, color: "black" }} />
          </a>
  
            </p>
            </Box>
          
          
            <Box paddingX={105}>
          <a href="https://institutolivres.org.br/como-escolher-uma-ong-que-ajuda-pessoas-para-apoiar/">
              <img src="https://institutolivres.org.br/wp-content/uploads/2022/06/logo-instituto-livres-2-1-1.jpg" alt="" />
            </a>
            <br/>
            <img src="https://institutolivres.org.br/wp-content/uploads/2022/06/pix-livres-1.jpg" alt="" />
          </Box>
          
          
        </Grid>
        
      </Grid>
    </>
  );
}

export default QueroAjudar;