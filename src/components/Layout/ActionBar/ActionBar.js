import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './Toolbar.css';

class Toolbar extends React.Component {

    render() {
        return (
            <Grid container justify={'center'} align={'center'}>
                <Grid item sm={6}>
                    <TextField fullWidth label="Add a New Exercise" onChange={this.props.handleChange} value={this.props.newExercise}></TextField>
                </Grid>
                <Grid item sm={6}>
                    <Button onClick={this.props.addNewExercise}>Add Exercise</Button>
                    </Grid>
            </Grid>
        )
    }
}
export default Toolbar;