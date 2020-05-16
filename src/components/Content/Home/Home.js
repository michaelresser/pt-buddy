import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100vw'
    },
    box: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '2rem'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Box className={classes.box}>
                <h1 className={classes.title}>Welcome to PT Buddy!</h1>
                <h1>Dashboard</h1>
                <h3>coming soon</h3>
            </Box>
        </Grid>
    );
}


export default Home;

