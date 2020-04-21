import React from 'react';
import { Container, TextField, Button, FormControl, FormGroup } from '@material-ui/core';

const Toolbar = (props) => {
    return (
        <Container container justify={'center'} align={'center'} >
            <FormControl>
                <FormGroup children row>
                    <TextField label="Add a New Exercise" onChange={props.handleChange} value={props.newExercise}></TextField>
                    <Button onClick={props.addNewExercise}>Add Exercise</Button>
                </FormGroup>
            </FormControl>
        </Container>
    )
}
export default Toolbar;