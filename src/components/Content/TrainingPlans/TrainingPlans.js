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
    }
})

const TrainingPlans = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Box className={classes.box}>
                <h1>Training Plans</h1>
                <h3>coming soon</h3>
            </Box>
        </Grid>
    );
}


export default TrainingPlans;