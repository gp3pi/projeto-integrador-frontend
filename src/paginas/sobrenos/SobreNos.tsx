import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { Box } from "@mui/material";
import Banner from "../sobrenos/img/banner.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect } from "react";
import './SobreNos.css'

function SobreNos(){

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
      <Grid container>
            <Grid item xs={12} sm={12}>
                <Box>
                    <img src={Banner} alt="" className='imagemBanner'/>
                </Box>
            </Grid>

            <Grid container>
                <Grid item xs={12} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Box padding={5}>
                        <Typography className='fontMerri' variant='h4' gutterBottom color='textPrimary' component='h4' align='center'>Sobre Nós</Typography>
                        <Typography  className='fontWork' align='center' variant='body1'>Este foi um projeto desenvolvido pelos alunos do bootcamp Generation Brasil, em 2022, com o intuito de colaborar com regiões 
                            geograficamente vulneráveis, tais como as que carecem de recursos básicos ou que se encontram em situação bélica, 
                            e esse suporte, por parte dos usuários, poderá ocorrer através de doações e compartilhamento de informações
                        </Typography>
                        <Typography className='fontWork' variant='body1' align='center'>
                        A ideia para fundação da Telk foi inspirada pelos objetivos de desenvolvimento sustentável da ONU, mais espeficicamente pela ODS 16 (Paz, Justiça e Instituições Eficazes), que visa promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável.
                       
                        </Typography>
                    </Box>           
                </Grid>
                <Grid item xs={12} sm={2}/>
            </Grid>

            <Grid item container xs={12} sm={12} direction="row" justifyContent="center">
                <Grid><img src="https://cdn.discordapp.com/attachments/1020449442861699127/1021167737667600384/element_1.png"alt=""/></Grid>
            </Grid>

            <Grid container className='integrantColor'>
                <Grid item xs={12} sm={12}>
                    <Typography className='fontMerri marginText integrantColor padding15' variant='h5' align='center'>Quem somos</Typography>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Box width='40%' className='padding'>
                        <Link href="https://www.linkedin.com/in/jo%C3%A3o-orlando-78b99b231/">
                        <img className='perfis' src="https://cdn.discordapp.com/attachments/1020449442861699127/1021167739290787860/joao.png" width="260px" height="225px" alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' align="center">João Orlando</Typography>
                    </Box> 
                    <Box width='40%' className='padding'>
                        <Link href="https://www.linkedin.com/in/victor-hugo-pires-takahashi/">
                        <img className='perfis' src="https://cdn.discordapp.com/attachments/1020449442861699127/1021167738942652416/ft.png" alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' align="center">Victor Hugo</Typography>
                    </Box>
                </Grid>


                <Grid alignItems="center" item xs={6} sm={4}>
                    <Box padding={5}>
                        <Link href="https://www.linkedin.com/in/vitor-martins-42176a165/">
                        <img className='perfis' src="https://cdn.discordapp.com/attachments/1020449442861699127/1021180430126424215/vt.png" alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' color="textPrimary" align="center">Vitor Martins</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Box padding={5}>
                        <Link href="https://www.linkedin.com/in/hellen-sabo-7535bb215/">
                        <img className='perfis' src="https://cdn.discordapp.com/attachments/1020449442861699127/1021167738116374548/Ellipse_6.png" alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' color="textPrimary" align="center">Hellen Sabo</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box padding={5}>
                        <Link href="https://www.linkedin.com/in/melissa-julia-lecona-lequipe-b37016240">
                        <img className='perfis' src="https://cdn.discordapp.com/attachments/1020449442861699127/1021167738502254632/ft_1.png"  alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' color="textPrimary" align="center">Melissa Julia </Typography>
                    </Box>
                </Grid>
            </Grid>
      </Grid>
    </>
  );
}
export default SobreNos;