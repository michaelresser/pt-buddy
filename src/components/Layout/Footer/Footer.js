import React from 'react';
import { Box, Container, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footer: {
        padding: '.5rem 1rem',
        background: '#3f51b5',
        position: 'fixed',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
    }
});


const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.footer}>
            
                <Typography variant="h6" color={'inherit'}>
                    &copy; Mike Esser, 2019
                </Typography>
            
            <Box>
                <IconButton href='https://github.com/michaelresser/pt-buddy' color={'inherit'} target='_blank' >
                    <GitHubIcon />
                </IconButton>
                <IconButton href='https://linkedin.com/in/michaelresser' color={'inherit'} target='_blank' >
                    <LinkedInIcon />
                </IconButton>
            </Box>

        </Container>
    );
}

export default Footer;

