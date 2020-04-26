import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AppContext from '../../../context/context';


const ExerciseList = (props) => {
    /* handleDelete creted to stop event bubbling through to list item selectExercise method */
    const handleDeleteExercise = (event, item) => {
        event.stopPropagation();
        event.preventDefault();
        props.deleteExercise(item.id);
    }

    return (
        <AppContext.Consumer>
            {context =>
                <List>
                    {context.exercises.map(item => {
                        return (
                            <ListItem button
                                key={item.id}
                                onClick={() => {
                                    context.selectExercise(item);
                                    
                                }}
                                alignItems='center'>
                                <ListItemText
                                    primary={item.name}>
                                </ListItemText>
                                <Button children
                                    onClick={(event) => {
                                        handleDeleteExercise(event, item)
                                    }}
                                    color="secondary">
                                    <DeleteIcon />
                                </Button>
                            </ListItem>
                        )
                    })}
                </List>
            }
        </AppContext.Consumer>
    );
}
export default ExerciseList;