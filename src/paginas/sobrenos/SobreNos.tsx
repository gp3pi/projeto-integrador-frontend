import { Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import React from 'react';
import './SobreNos.css'

function SobreNos(){

    return(
        <>
        <Grid>
            <Grid>
                <Box>
                    <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' style={{fontWeight: 'bold'}} >Sobre Nós</Typography>
                    <Typography  align='center'>Este foi um projeto desenvolvido pelos alunos do bootcamp Generation Brasil com o intuito de colaborar com regiões 
                        geograficamente vulneráveis, tais como as que carecem de recursos básicos ou que se encontram em situação bélica, 
                        e esse suporte, por parte dos usuários, poderá ocorrer através de doações e compartilhamento de informações
                    </Typography>
                    <Typography variant='h5'align='center' style={{fontWeight: 'bold'}}>Integrantes </Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
            <Grid xs={3}>
            <Typography align='center' style={{fontWeight: 'bold'}} >Nome </Typography>
            <Typography align='center'>Lobortis curabitur ante aenean a tempus elit molestie a natoque eget a sed enim dignissim. A a taciti a ut tortor rutrum nulla ultricies arcu suspendisse a sem aliquam vestibulum   
            </Typography>
            </Grid>
            <Grid xs={3}>
            <Typography align='center' style={{fontWeight: 'bold'}}>Nome </Typography>
            <Typography align='center'>Lobortis curabitur ante aenean a tempus elit molestie a natoque eget a sed enim dignissim. A a taciti a ut tortor rutrum nulla ultricies arcu suspendisse a sem aliquam vestibulum   
            </Typography>
            </Grid>
            <Grid xs={3}>
            <Typography align='center' style={{fontWeight: 'bold'}}>Nome </Typography>
            <Typography align='center'>Lobortis curabitur ante aenean a tempus elit molestie a natoque eget a sed enim dignissim. A a taciti a ut tortor rutrum nulla ultricies arcu suspendisse a sem aliquam vestibulum   
            </Typography>
            </Grid>
            <Grid xs={3}>
            <Typography align='center' style={{fontWeight: 'bold'}}>Nome </Typography>
            <Typography align='center'>Lobortis curabitur ante aenean a tempus elit molestie a natoque eget a sed enim dignissim. A a taciti a ut tortor rutrum nulla ultricies arcu suspendisse a sem aliquam vestibulum    
            </Typography>
            </Grid>
        </Grid>
        </>
    );
}

export default SobreNos;