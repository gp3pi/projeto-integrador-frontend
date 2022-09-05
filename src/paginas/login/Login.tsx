import React from 'react';

import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import './Login.css'

function Login() {
    return (
        <>

            <Grid className="grid" container sm={12}>

                <Box className="main-container">

                    <Box className="container01">
                        <img className="img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014935679312072704/password-encryption-2600564-2179749_1.png" alt="signin-image" />
                    </Box>

                    <Box className="container02">

                        <Box className="login">
                            <img className="profile-img" src="https://cdn.discordapp.com/attachments/710276943592816720/1014738564476571688/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="" />

                            <Typography className="title" variant="h3">
                                Bem-vindo!
                            </Typography>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="email" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon className="icons" />
                                        </InputAdornment>
                                    ),
                                }}
                                    variant="standard" />
                            </Box>

                            <Box className="textfield-container">
                                <TextField className="textfield" type="password" InputProps={{
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
                                    Não é registrado?
                                </Link>

                                <Link className="link" to="">
                                    Esqueci minha senha
                                </Link>
                            </Box>

                            <Link className="button-container" to="/home">
                                <Button className="button" variant="contained">LOGIN</Button>
                            </Link>
                        </Box>
                    </Box>

                </Box>

            </Grid>

        </>
    )
}

export default Login;