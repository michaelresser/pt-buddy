import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AppContext from '../../../context/context';


const ExerciseList = () => {

    return (
        <AppContext.Consumer>
            {context => (
                <List>
                    {context.exercises.map(exercise => {
                        return (
                            <ListItem button
                                key={exercise.id}
                                onClick={() => {
                                    context.selectExercise(exercise);
                                }}
                                alignItems='center'>
                                <ListItemText
                                    primary={exercise.name}>
                                </ListItemText>
                                <Button children
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        context.deleteExercise(exercise);
                                    }}
                                    color="secondary">
                                    <DeleteIcon />
                                </Button>
                            </ListItem>
                        )
                    })}
                </List>
            )}
        </AppContext.Consumer>
    );
}
export default ExerciseList;