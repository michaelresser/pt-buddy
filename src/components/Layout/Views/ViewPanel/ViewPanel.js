import React from 'react';
import {AppContext} from '../../../index';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
    root: {
     
    }
});



const ViewPanel = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container >
                <AppContext.Consumer>
                    {value =>
                        value.currentView
                    }
                </AppContext.Consumer>
            </Container>
        </div>
    )
}

export default ViewPanel;