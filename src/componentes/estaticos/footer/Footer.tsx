import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css';


function Footer() {
    return (
        <>
            <Grid container direction="row" 
            justifyContent="center" 
            alignItems="center">
                <Grid 
                className = 'folha' 
                alignItems="center" 
                item xs={12}>
                    <Box className='colorCont02'
                    style={{ height: "90px", background: " #960718 " }}>
                        <Box 
                        paddingTop={2} display="flex" 
                        alignItems="center" 
                        justifyContent="center">
                            <Typography 
                            variant="h6" 
                            align="center" 
                            gutterBottom 
                            style={{ color: "white" }}>Responsaveis pela criação
                            </Typography>
                        </Box>
                        <Box 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center">
                            
                            <a 
                            href="https://linktr.ee/ColaboradoresProjetoIntegrador" 
                            target="_blank">
                                <img 
                                src="https://www.freelogovectors.net/wp-content/uploads/2022/01/linktree-logo-freelogovectors.net_-400x327.png" 
                                alt="" 
                                style={{ width: '25px' , height: '20px', color: "black"}}/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='colorCont' 
                    style={{ height: "60px" }}>
                        <Box 
                        paddingTop={1}>
                            <Typography 
                            variant="subtitle2" 
                            align="center" 
                            gutterBottom 
                            style={{ color: "white" }} >© 2022 Copyright:
                            </Typography>
                        </Box>
                        <Box>
                            <a 
                            target="_blank" 
                            href="">
                                <Typography 
                                variant="subtitle2" 
                                gutterBottom 
                                style={{ color: "white" }}
                                className='link' 
                                align="center">com.blogpessoal.org
                                
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;