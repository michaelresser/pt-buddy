import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { ExerciseActions, ExerciseList, ExerciseView } from '../../../index';
import AppContext from '../../../context/context';


const Exercises = (props) => {
    return (
        <AppContext.Consumer>
            {context => (
                <Container>
                <ExerciseActions />
                <Grid container>
                    <Grid container item sm={6}>
                        <ExerciseList />
                    </Grid>
                    <Grid container item sm={6} justify='center' alignItems='center'>
                        <ExerciseView />
                    </Grid>
                </Grid>
            </Container>
            )}
        </AppContext.Consumer>

    )
}

export default Exercises;