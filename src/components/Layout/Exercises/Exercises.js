import React from 'react'
import { Grid } from '@material-ui/core';
import { ExerciseList, ExerciseView } from '../../index';



const Exercises = (props) => {
    return (
        <Grid container>
            <Grid container item xs>
                <ExerciseList
                    exercises={props.exercises} deleteExercise={props.deleteExercise}
                    selectExercise={props.selectExercise}
                />
            </Grid>
            <Grid container item xs justify='center' alignItems='center'>
                <ExerciseView
                    exercises={props.exercises}
                    currentExercise={props.currentExercise} />
            </Grid>
        </Grid>
    )
}

export default Exercises;