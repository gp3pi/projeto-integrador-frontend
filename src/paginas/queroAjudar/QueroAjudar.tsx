import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "./QueroAjudar.css";
import { Box } from "@mui/material";
import { Button, Grid, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Link, Typography } from '@material-ui/core'
import Carrossel from '../../componentes/Carrossel/Carrossel'

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
      <Grid container >
        <Grid item xs={12} >
          <Carrossel />
        </Grid>

        <Grid container xs={12} sm={12} justifyContent="center" className='colorWhite '>
          <Box width='25%' padding={10} >
            <img src="https://cdn.discordapp.com/attachments/1020449442861699127/1020519816227991552/lsbs.png" alt="" width="275px" height="240px" />
          </Box>
          <Box width='35%' padding={10} >
            <Typography className='fntWork'>A Sociedade Brasileira para Solidariedade nasceu com o sonho de estimular o encontro do indivíduo com suas potencialidades para que reconheça seu papel na sociedade e possa construir seu futuro de maneira digna e...
            </Typography>
            <Link href="https://sbsrj.org.br/">
              <Typography className="bold">Saiba mais</Typography>
            </Link>
          </Box>
        </Grid>

        <Grid container xs={12} sm={12} direction="row" justifyContent="center" className='colorLight padding15'>
          <Box width='35%' padding={10} >
            <Typography className='fntWork'>A TamoJuntas começou uma grande campanha de doação para que mais voluntárias consigam continuar o trabalho de assistência multidisciplinar com mulheres vítimas de violência. Dessa forma, você pode amadrinhar uma...
            </Typography>
            <Link href="https://tamojuntas.org.br/">
              <Typography className="bold">Saiba mais</Typography>
            </Link>
          </Box>
          <Box width='25%' padding={10} >
            <img src="https://cdn.discordapp.com/attachments/1020449442861699127/1020526688829968414/tamoj.png" width="300px" height="265px" alt="" />
          </Box>
        </Grid>

        <Grid container xs={12} sm={12} justifyContent="center" className='colorWhite padding15'>
          <Box width='25%' padding={10} justifyContent="center">
            <img src="https://cdn.discordapp.com/attachments/1020449442861699127/1020534756615667832/africa_1.png" width="270px" height="285px" alt="" />
          </Box>
          <Box width='35%' padding={10} >
            <Typography className='fntWork'>A Missão África foi fundada em 2012 logo após uma viagem que uma de nossas fundadoras fez em Moçambique a convite de uma instituição local. Assim que retornou ao Brasil, juntou com alguns amigos e fundaram a ONG Missão África, com o intuito de transformar a realidade de pessoas que vivem em situação de miséria...
            </Typography>
            <Link href="https://www.missaoafrica.org.br/sobre-nos">
              <Typography className="bold">Saiba mais</Typography>
            </Link>
          </Box>
        </Grid>

        <Grid container xs={12} sm={12} justifyContent="center" className='colorLight padding15'>
          <Box width='35%' padding={10} >
            <Typography className='fntWork'>O escritório do Alto Comissariado das Nações Unidas para os Refugiados (ACNUR) foi criado em 1950, após a Segunda Guerra Mundial, para ajudar milhões de europeus que fugiram ou perderam suas casas...
            </Typography>
            <Link href="https://www.unhcr.org/history-of-unhcr.html">
              <Typography className="bold">Saiba mais</Typography>
            </Link>
          </Box>
          <Box width='25%' padding={10} >
            <img src="https://cdn.discordapp.com/attachments/1020449442861699127/1020530829543358556/unh_1.png" width="270px" height="260px" alt="" />
          </Box>
        </Grid>

        <Grid container xs={12} sm={12} justifyContent="center" className='colorWhite '>
          <Box className="queroajudar-img">
            <img src="https://cdn.discordapp.com/attachments/1020449442861699127/1020550075937726505/Elementos.png" width="140px" height="100px" alt="" />
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} justifyContent="center" className="center">
        <Typography className='fntWork bold'>Entre em contato</Typography>
      </Grid>

      <Grid item xs={12} justifyContent="center">
        <Box paddingX={35} className="margin">

          <TextField

            id="filled-basic"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <TextField

            id="filled-basic"
            type="email"
            label="E-mail"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            id="outlined-multiline-static"
            name="assunto"
            label="Assunto"
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required />

          <Box display="flex" justifyContent="center" className="margin02">
            <Button
              className="btn02"
              type="submit"
              variant="contained"
              color="primary"
              onClick={enviar}>
              <Typography className="btn02-content" variant="body2">
                Enviar
              </Typography>
            </Button>
          </Box>

        </Box>

      </Grid>
    </>
  );
}

export default QueroAjudar;