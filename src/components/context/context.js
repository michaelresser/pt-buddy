// Extracting context to separate file as needed
import React from 'react';
//modules
import { v4 as uuid } from 'uuid';


export const AppState = {
    exercises: [
        {
            id: uuid(),
            name: 'Narrow Pushup',
            muscles: ''
        },
        {
            id: uuid(),
            name: "Alternating One-Arm Kettlebell Swing",
            muscles: ''
        },
        {
            id: uuid(),
            name: "Supine Lateral Leg Raises",
            muscles: ''
        }
    ],
    workouts: [
        {
            id: uuid(),
            name: 'Workout 1',
            workout: [
                { exercise: 'pushups', sets: 3, reps: 10 },
                { exercise: 'kettlebell swings', sets: 3, reps: 10 },
                { exercise: 'Boxing', sets: 3, time: "3 min" },
            ]
        },
        {
            id: uuid(),
            name: 'Workout 1',
            workout: [
                { exercise: 'pushups', sets: 3, reps: 10 },
                { exercise: 'kettlebell swings', sets: 3, reps: 10 },
                { exercise: 'Boxing', sets: 3, time: "3 min" },
            ]
        },
        {
            id: uuid(),
            name: 'Workout 1',
            workout: [
                { exercise: 'pushups', sets: 3, reps: 10 },
                { exercise: 'kettlebell swings', sets: 3, reps: 10 },
                { exercise: 'Boxing', sets: 3, time: "3 min" },
            ]
        },
        {
            id: uuid(),
            name: 'Workout 1',
            workout: [
                { exercise: 'pushups', sets: 3, reps: 10 },
                { exercise: 'kettlebell swings', sets: 3, reps: 10 },
                { exercise: 'Boxing', sets: 3, time: "3 min" },
            ]
        },
    ]
};
const AppContext = React.createContext({});

export default AppContext;






