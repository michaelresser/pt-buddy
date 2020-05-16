// Modules
import React from "react";
// Components
import { Header, ViewPanel, Footer } from "../../components/index.js";
// Context
import AppContext, { AppState } from "../Context/Context";
// MaterialUI
import { CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";





const App = () => {

  const state = {
    routes: AppState.routes,
    methods: AppState.methods,
    exercises: [...AppState.exercises],
    handleChange: AppState.methods.handleChange,
    selectExercise: AppState.methods.selectExercise,
    addExercise: AppState.methods.addExercise,
    deleteExercise: AppState.methods.deleteExercise,
    filterExercisesBy: AppState.methods.filterExercisesBy,
  };
  
  const useStyles = makeStyles({
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'column',
      
    }
  })
  const classes = useStyles();

  return (
    <div >
      <CssBaseline />
      <AppContext.Provider value={state}>
        <Grid className={classes.root}>
          <Header />
          <ViewPanel flexGrow={1}/>
          <Footer />
        </Grid>
      </AppContext.Provider>
    </div>
  )

}

export default App;
