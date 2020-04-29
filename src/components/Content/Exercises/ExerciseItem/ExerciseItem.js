import React from 'react';
import {Button, Typography, Divider, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AppContext from '../../../context/context';

const ExerciseIten = (props) => {
    return (
        <AppContext.Consumer>
            {context => (
                <ExpansionPanel>             
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    >
                        <Typography>
                            {props.exercise.name}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant='h5' gutterBottom>
                            {props.exercise.name}
                        </Typography>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button children
                            onClick={(event) => {
                                event.stopPropagation();
                                event.preventDefault();
                                context.deleteExercise(props.exercise);
                            }}
                            color="secondary">
                            <DeleteForeverIcon />
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            )}

        </AppContext.Consumer>
    )
}

export default ExerciseIten;
