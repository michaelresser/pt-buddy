import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { WorkoutsActions, WorkoutList, WorkoutView } from '../../../../index';



const Workouts = (props) => {
    return (
        <Container>
            <WorkoutsActions/>
            <Grid container>
                <Grid container item xs>
                    <WorkoutList>Workout List</WorkoutList>
                </Grid>
                <Grid container item xs justify='center' alignItems='center'>
                    <WorkoutView>
                        Workout View
                    </WorkoutView>

                </Grid>
            </Grid>
        </Container >

    )
}

export default Workouts;