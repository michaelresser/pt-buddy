import React from 'react';
import { List } from '@material-ui/core';
import { AppContext, ExerciseItem } from '../../../index';


const ExerciseList = () => {

    return (
        <AppContext.Consumer>
            {context => (
                <List>
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