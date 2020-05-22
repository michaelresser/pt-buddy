import React from 'react';
import { makeStyles, List } from '@material-ui/core';
import AppContext from '../../Context/Context';
import {ExerciseItem} from '../../index';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap', 
        JustifyContent: 'center',
        alignItems: 'center'
    } 
})
const ExerciseList = () => {
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