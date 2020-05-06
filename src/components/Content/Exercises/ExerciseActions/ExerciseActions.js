import React from 'react';
import { Container, TextField, Button, FormControl, FormGroup } from '@material-ui/core';
import {AppContext} from '../../../index';


const ExerciseActions = () => (
    <AppContext.Consumer>
        {context => (
            <Container>
                <FormControl fullWidth>
                    <FormGroup children row>
                        <TextField fullWidth label="Add a New Exercise" onChange={context.handleChange} value={context.newExercise.name}></TextField>
                        <Button onClick={context.addExercise}>Add Exercise</Button>
                    </FormGroup>
                </FormControl>
            </Container>
        )}
    </AppContext.Consumer>
);

export default ExerciseActions;