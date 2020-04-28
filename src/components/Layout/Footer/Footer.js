import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        width: '100vw',
        padding:'.5rem 0',
        background: '#3f51b5',
        position: 'fixed',
        bottom: '0',
    },
    h6: {
        color: '#fff',           
    },
});


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography gutterBottom variant="h6" align="center" className={classes.h6}>
                &copy; Mike Esser, 2019
            </Typography>
        </div>

    );

}

export default Footer;

