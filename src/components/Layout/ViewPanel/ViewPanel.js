import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AppContext from '../../Context/Context';
import { Home, Exercises, Footer, Workouts, Programs } from '../../index';


const useStyles = makeStyles({
    root: {
        width: '100vw',
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        paddingTop: '110px',

    }
})


const ViewPanel = () => {
    const classes = useStyles();

    return (
        <AppContext.Consumer>
            {context => (                
                    <Grid container className={classes.root}>
                        <Switch>
                            {/* Mapping routes from context.routes is returning nothing, because the component value is undefined, even though the OG Components are being imported properly into the context.js file. 
                              
                            
                            {context.routes.map( (route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        exact
                                        path={route.path}
                                        component={route.component.toString()}
                                    >

                                    </Route >
                                )
                            })} */}
                            <Route exact path={"/"} component={Home} />
                            <Route exact path={"/Exercises"} component={Exercises} />
                            <Route exact path={"/Workouts"} component={Workouts} />
                            <Route exact path={"/TrainingPlans"} component={Programs} />
                        </Switch>
                        <Footer />
                    </Grid>                                
            )}
        </AppContext.Consumer>)
};


export default ViewPanel;