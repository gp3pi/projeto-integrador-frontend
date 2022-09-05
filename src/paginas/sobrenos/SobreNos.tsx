import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { Box } from "@mui/material";
import './SobreNos.css'

function SobreNos(){


return (
    <>
      <Grid container>
            <Grid item xs={12} className='imagemBanner'>
                <Box padding={20}>
                </Box>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Box padding={5}>
                        <Typography className='fontMerri' variant='h4' gutterBottom color='textPrimary' component='h4' align='center'>Sobre Nós</Typography>
                        <Typography  className='fontWork' align='center' variant='body1'>Este foi um projeto desenvolvido pelos alunos do bootcamp Generation Brasil com o intuito de colaborar com regiões 
                            geograficamente vulneráveis, tais como as que carecem de recursos básicos ou que se encontram em situação bélica, 
                            e esse suporte, por parte dos usuários, poderá ocorrer através de doações e compartilhamento de informações
                        </Typography>
                        <Typography className='fontWork' variant='body1' align='center'>
                        Todos os dias lemos notícias de situaçôes devastadoras como "Início da guerra na Ucrânia começou no dia 24 de fevereiro com a invasão do território do país pela Rússia. Taxa de assassinatos de indígenas aumenta 21,6% em dez anos enquanto de homicídios em geral cai. União Europeia dificulta regras de viagem para russos, mas rejeita proibição de visto. No continente africano, os albinos são estigmatizados, banidos e até mesmo assassinados. A Tanzânia, o Quénia e a África do Sul são países onde os albinos temem pelas suas vidas.
                        </Typography>
                    </Box>           
                </Grid>
                <Grid item xs={12} sm={2}/>
            </Grid>

            <Grid container xs={12} sm={12} direction="row" justifyContent="center" >
                <Box width='18%' padding={4} className='marginText'>
                    <Typography variant='h5' className='fontMerri' >1.</Typography>
                    <Typography className='fontMerri'>Se informe sobre diversos temas e opiniões</Typography>
                </Box>
                <Box width='18%' padding={4} className='marginText'>
                    <Typography variant='h5' className='fontMerri'>2.</Typography>
                    <Typography className='fontMerri'>Compartilhe suas ideias e opiniões através da sua postagem</Typography>
                </Box>
                <Box width='18%' padding={4} className='marginText'>
                    <Typography variant='h5' className='fontMerri' >3.</Typography>
                    <Typography className='fontMerri'>Descubra como você pode ajudar </Typography>
                </Box>
            </Grid>


            <Grid item xs={12} sm={12}>
                <Typography className='fontMerri marginText integrantColor padding' variant='h5' align='center'>Quem somos</Typography>
            </Grid>

            <Grid container className='integrantColor'>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Box width='40%' className='padding'>
                        <Link href="https://linktr.ee/ColaboradoresProjetoIntegrador">
                        <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                        </Link>
                        <Typography  className='fontSans' align="center">Nome Completo</Typography>
                        <Typography  className='fontSans' align="center">Uma breve descrição deste membro</Typography>
                    </Box> 
                    <Box width='40%' className='padding'>
                        <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                        <Typography  className='fontSans' align="center">Nome Completo</Typography>
                        <Typography  className='fontSans' align="center">Uma breve descrição deste membro</Typography>
                    </Box>
                </Grid>


                <Grid alignItems="center" item xs={6} sm={4}>
                    <Box padding={5}>
                        <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                        <Typography  className='fontSans' color="textPrimary" align="center">Nome Completo</Typography>
                        <Typography  className='fontSans' color="textPrimary" align="center">Github       Linkedin</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Box padding={5}>
                        <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                        <Typography  className='fontSans' color="textPrimary" align="center">Nome Completo</Typography>
                        <Typography  className='fontSans' color="textPrimary" align="center">Github       Linkedin</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box padding={5}>
                        <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                        <Typography  className='fontSans' color="textPrimary" align="center">Nome Completo</Typography>
                        <Typography  className='fontSans' color="textPrimary" align="center">Github       Linkedin</Typography>
                    </Box>
                </Grid>
            </Grid>
      </Grid>
    </>
  );
}
export default SobreNos;