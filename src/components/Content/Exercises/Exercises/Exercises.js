import React from 'react'
import { Container } from '@material-ui/core';
import { ExerciseActions, ExerciseList} from '../../../index';



const Exercises = () => {
    return (
        <Container>
            <ExerciseActions />
            <ExerciseList />
        </Container>
    )
}
        


export default Exercises;