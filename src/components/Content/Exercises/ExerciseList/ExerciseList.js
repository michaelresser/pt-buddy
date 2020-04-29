import React from 'react';
import { List } from '@material-ui/core';
import AppContext from '../../../context/context';
import {ExerciseItem} from '../../../index';


const ExerciseList = () => {

    return (
        <AppContext.Consumer>
            {context => (
                <List>
                    {context.exercises.map(exercise => {
                        return (
                            <ExerciseItem
                                key={exercise.name}
                                exercise={exercise}
                            />
                        )
                    })}
                </List>
            )}
        </AppContext.Consumer>
    );
}
export default ExerciseList;