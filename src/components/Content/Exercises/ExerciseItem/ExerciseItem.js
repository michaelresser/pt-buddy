import React from 'react';
import { Button, Box, Chip, Typography, Divider, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AppContext from '../../../Context/Context';

const ExerciseIten = (props) => {
    return (
        <AppContext.Consumer>
            {context => (
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header">
                        <Typography>{props.exercise.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Box display='flex' alignItems={'center'}>
                            <AccessibilityNewIcon style={{ fontSize: 24, marginRight: '.5em'  }} />
                            {props.exercise.muscles.map(item => (
                                <Chip label={item} size='small' style={{marginRight: '.5em'}}/>
                            ))}
                        </Box>
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
