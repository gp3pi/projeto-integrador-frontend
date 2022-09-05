import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './SobreNos.css'

function SobreNos(){


return (
    <>
      <Grid container>
            <Grid item xs={12} className='imagems'>
                <Box padding={20}>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Box padding={15} >
                    <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' style={{fontWeight: 'bold'}} >Sobre Nós</Typography>
                    <Typography  align='center'>Este foi um projeto desenvolvido pelos alunos do bootcamp Generation Brasil com o intuito de colaborar com regiões 
                        geograficamente vulneráveis, tais como as que carecem de recursos básicos ou que se encontram em situação bélica, 
                        e esse suporte, por parte dos usuários, poderá ocorrer através de doações e compartilhamento de informações
                    </Typography>
                    <Typography align='center'>
                    A guerra na Ucrânia começou no dia 24 de fevereiro com a invasão do território do país pela Rússia. Taxa de assassinatos de indígenas aumenta 21,6% em dez anos enquanto de homicídios em geral cai. União Europeia dificulta regras de viagem para russos, mas rejeita proibição de visto. No continente africano, os albinos sofrem com os preconceitos. São estigmatizados, banidos e até mesmo assassinados. A Tanzânia, o Quénia e a África do Sul são países onde os albinos temem pelas suas vidas.
                    </Typography>
                </Box>          
            </Grid>
            <Grid xs={12} sm={12}>
                <Typography variant='h5'align='center' style={{fontWeight: 'bold'}}>Integrantes </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box padding={5}>
                    <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                    <Typography  color="textPrimary" align="center">Nome Completo</Typography>
                    <Typography  color="textPrimary" align="center">Uma breve descrição deste membro</Typography>
                </Box> 
            </Grid>
            <Grid item xs={6} sm={6}>
                <Box padding={5}>
                    <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                    <Typography  color="textPrimary" align="center">Nome Completo</Typography>
                    <Typography  color="textPrimary" align="center">Uma breve descrição deste membro</Typography>
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={6} sm={4}>
                <Box padding={5}>
                    <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                    <Typography  color="textPrimary" align="center">Nome Completo</Typography>
                    <Typography  color="textPrimary" align="center">Github       Linkedin</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Box padding={5}>
                    <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                    <Typography  color="textPrimary" align="center">Nome Completo</Typography>
                    <Typography  color="textPrimary" align="center">Github       Linkedin</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Box padding={5}>
                    <img className='perfis' src="https://i.pinimg.com/originals/54/bf/7a/54bf7a45856c608fe7165a908d57c7cf.png" alt="Foto de um integrante" />
                    <Typography  color="textPrimary" align="center">Nome Completo</Typography>
                    <Typography  color="textPrimary" align="center">Github       Linkedin</Typography>
                </Box>
            </Grid>
      </Grid>
    </>
  );
}
export default SobreNos;