import React from 'react';
import {Typography } from '@material-ui/core';



const ExerciseView = (props) => {
    return (
        <Typography variant='h5' gutterBottom>
            {props.currentExercise.name ? props.currentExercise.name : props.exercises[0].name}
        </Typography>
    )
}
export default ExerciseView;