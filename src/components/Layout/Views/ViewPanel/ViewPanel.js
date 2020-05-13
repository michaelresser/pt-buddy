import React from 'react';
import { AppContext } from '../../../index';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column'
    }, 
    drawer: {
        zIndex: 1009
    }
}));



const ViewPanel = () => {
    const classes = useStyles();
    
    return (
        <AppContext.Consumer>
            {context => (
                <div className={classes.root}>                    
                    {context.currentView} 
                </div>
            )}
        </AppContext.Consumer>


    )
}

export default ViewPanel;