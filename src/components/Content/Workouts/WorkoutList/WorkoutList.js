import React from 'react';
import { Box, /* Button, List, ListItem, ListItemText */ } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';


const WorkoutList = (props) => {

    /* const handleDeleteExercise = (event, item) => {
        event.stopPropagation();
        event.preventDefault();
        props.deleteExercise(item.id);
    } */

    return (
        <Box>
            Workout List
            {/* <List>
                {props.exercises.map(item => {
                    return (
                        <ListItem button
                        key={item.id}
                            onClick={() => {
                                props.selectExercise(item)
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
            </List> */}
        </Box >
    );
}
export default WorkoutList;