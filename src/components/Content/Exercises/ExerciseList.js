import React from 'react';
import { makeStyles, List } from '@material-ui/core';
import { ExerciseItem } from '../../index';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        JustifyContent: 'center',
        alignItems: 'center'
    }
});

const ExerciseList = (props) => {
    const classes = useStyles();


    return (
        <List className={classes.root}>
            {props.list.map(item => {
                return (
                    <ExerciseItem
                        key={item.id}
                        exercise={item}
                    />
                )
            })}
        </List>
    );
}
export default ExerciseList;