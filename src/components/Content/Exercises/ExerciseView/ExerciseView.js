import React from 'react';
import { Typography } from '@material-ui/core';
import {AppContext} from '../../../index'


const ExerciseView = () => {
    return (
        <AppContext.Consumer>
            {context =>
                <Typography variant='h5' gutterBottom>
                    {context.currentExercise.name ? context.currentExercise.name : context.exercises[0].name}
                </Typography>
            }
        </AppContext.Consumer>
    )
}
export default ExerciseView;