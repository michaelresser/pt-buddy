import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        background: '#3f51b5',
        color: '#fff',
        alignSelf: 'flex-end',
        bottom: 0
    },
    footer: {        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',        
    }
});


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.footer}>
            <Typography variant="h6" color={'inherit'}>
                &copy; Mike Esser, 2019
                </Typography>
            </Container>
        </div>
    );
}

export default Footer;

