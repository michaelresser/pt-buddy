import React from 'react';
import AppContext from '../../../Context/Context';
// Material-ui Components
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
/* import backgroundImage from '../../../../assets/images/garrett-butler-gym-words.jpg'; */


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