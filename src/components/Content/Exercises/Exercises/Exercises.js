import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { ExerciseActions, ExerciseList, ExerciseView } from '../../../index';



const Exercises = (props) => {
    return (
        <Container>
            <ExerciseActions
            addNewExercise={props.addExercise}
            handleChange={props.handleChange} />
        <Grid container>
            <Grid container item xs>
                <ExerciseList
                    exercises={props.exercises} deleteExercise={props.deleteExercise}
                    selectExercise={props.selectExercise} />
            </Grid>
            <Grid container item xs justify='center' alignItems='center'>
                <ExerciseView
                    exercises={props.exercises}
                    currentExercise={props.currentExercise} />
            </Grid>
        </Grid>
        </Container>
        
    )
}

export default Exercises;