import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            PI_Grupo_3
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to="/home">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to="/sobrenos">
                                <Typography variant="h6" color="inherit">
                                    Sobre nós
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Login
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

