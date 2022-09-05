import React from 'react'

import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

import './Cadastro.css'

function Cadastro() {
    return (
        <>

            <Grid className="grid-cadastro" container sm={12}>

                <Box className="main-container">

                    <Box className="container02">

                        <Box className="cadastro">

                            <Typography className="title" variant="h3">
                                Cadastre-se!
                            </Typography>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="text" label="Nome*" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon className="icons" />
                                        </InputAdornment>
                                    ),
                                }}
                                    variant="standard" />
                            </Box>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="email" label="E-mail*" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon className="icons" />
                                        </InputAdornment>
                                    ),
                                }}
                                    variant="standard" />
                            </Box>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="password" label="Senha*" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon className="icons" />
                                        </InputAdornment>
                                    ),
                                }}
                                    variant="standard" />
                            </Box>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="password" label="Confirmar senha*" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon className="icons" />
                                        </InputAdornment>
                                    ),
                                }}
                                    variant="standard" />
                            </Box>

                            <Box className="links">
                                <Link className="link" to="">
                                    Já é cadastrado?
                                </Link>

                            </Box>

                            <Box className="button-container">
                                <Button className="button" variant="contained">CADASTRAR</Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container01">
                        <img className="img-cadastro" src="https://cdn.discordapp.com/attachments/710276943592816720/1016381844595417201/img-cadastro.png" alt="signup" />
                    </Box>

                </Box>

            </Grid>

        </>
    )
}

export default Cadastro;