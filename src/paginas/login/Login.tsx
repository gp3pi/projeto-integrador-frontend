import React from 'react';

import { Grid, Typography, TextField, Link, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import './Login.css'

function Login() {
    return (
        <>

            <Grid container sm={12}>

                <Grid item xs={12} sm={6}>

                    <Box className="container01">

                    </Box>

                </Grid>

                <Grid item xs={12} sm={6}>

                    <Box className="container02">

                        <Box className="login">
                            <Typography className="title" variant="h3">
                                Bem-vindo!
                            </Typography>

                            <Box className="textfield-container">
                                
                                <TextField className="textfield" label="Username"/>
                            </Box>

                            <Box className="textfield-container">
                                
                                <TextField className="textfield" label="Password" />
                            </Box>

                            <Box className="links">
                                <Link>
                                    Não é registrado?
                                </Link>

                                <Link>
                                    Esqueci minha senha
                                </Link>
                            </Box>

                            <Button className="button" variant="contained">LOGIN</Button>
                        </Box>
                    </Box>

                </Grid>

            </Grid>

        </>
    )
}

export default Login;