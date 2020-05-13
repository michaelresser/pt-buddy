// Extracting context to separate file as needed
import React from 'react';
//modules
import { v4 as uuid } from 'uuid';


export const AppState = {
    exercises: [
        {
            id: uuid(),
            name: 'Narrow Pushup',
            muscles: ['Triceps', 'Chest', 'Core'],
            Gear: "Body",
            Categories: ['Endurance', 'Core', 'Total Body'],
            Level: 'Intermediate',
            Position: 'Prone'
        },
        {
            id: uuid(),
            name: 'Alternating 1-Arm KettleBell Swings',
            muscles: ['Shoulders', 'Back', 'Core', 'Hips'],
            Gear: "Kettlebell",
            Categories: ['Power Endurance', 'Total Body'],
            Level: 'Advanced',
            Position: 'Standing'
        },
        {
            id: uuid(),
            name: 'Sandbag Front Squat (Bearhug Hold)',
            muscles: ['Biceps', 'UpperBack', 'Hips', 'Legs' ],
            Gear: "Sandbag",
            Categories: ['Endurance', 'Total Body'],
            Level: 'Intermediate',
            Position: 'Standing'
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
<<<<<<< HEAD
export const AppContext = React.createContext({});

=======

const AppContext = React.createContext({});

export default  AppContext;
>>>>>>> refs/remotes/origin/dev







