import React from 'react';
import { List } from '@material-ui/core';
import { AppContext, ExerciseItem } from '../../../index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '90vw'
    },
});

const ExerciseList = (props) => {
    const classes = useStyles();
    return (
        <AppContext.Consumer>
            {context => (
                <List className={classes.root}>
                    {context.exercises.map(item => {
                        return (
                            <ExerciseItem
                                key={item.id}
                                exercise={item}
                            />
                        )
                    })}
                </List>
            )}
        </AppContext.Consumer>
    );
}
export default ExerciseList;