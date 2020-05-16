// Extracting context to separate file as needed
import React from "react";
// Components
import { Home, Exercises, Workouts, TrainingPlans } from '../index';
//modules
import { v4 as uuid } from "uuid";

export const AppState = {
    routes: [
        {
            name: "Home",
            path: "/",
            component: Home,
        },
        {
            name: "Exercises",
            path: "/Exercises",
            component: Exercises,
        },
        {
            name: "Workouts",
            path: "/Workouts",
            component: Workouts,
        },
        {
            name: "Training Plans",
            path: '/TrainingPlans',
            component: TrainingPlans,
        },

    ],
    exercises: [
        {
            id: uuid(),
            name: "Narrow Pushup",
            muscles: ["Triceps", "Chest", "Core"],
            Gear: "Body",
            Categories: ["Endurance", "Core", "Total Body"],
            Level: "Intermediate",
            Position: "Prone",
        },
        {
            id: uuid(),
            name: "Alternating 1-Arm KettleBell Swings",
            muscles: ["Shoulders", "Back", "Core", "Hips"],
            Gear: "Kettlebell",
            Categories: ["Power Endurance", "Total Body"],
            Level: "Advanced",
            Position: "Standing",
        },
        {
            id: uuid(),
            name: "Sandbag Front Squat (Bearhug Hold)",
            muscles: ["Biceps", "UpperBack", "Hips", "Legs"],
            Gear: "Sandbag",
            Categories: ["Endurance", "Total Body"],
            Level: "Intermediate",
            Position: "Standing",
        },
    ],
    workouts: [
        {
            id: uuid(),
            name: "Workout 1",
            workout: [
                { exercise: "pushups", sets: 3, reps: 10 },
                { exercise: "kettlebell swings", sets: 3, reps: 10 },
                { exercise: "Boxing", sets: 3, time: "3 min" },
            ],
        },
        {
            id: uuid(),
            name: "Workout 1",
            workout: [
                { exercise: "pushups", sets: 3, reps: 10 },
                { exercise: "kettlebell swings", sets: 3, reps: 10 },
                { exercise: "Boxing", sets: 3, time: "3 min" },
            ],
        },
        {
            id: uuid(),
            name: "Workout 1",
            workout: [
                { exercise: "pushups", sets: 3, reps: 10 },
                { exercise: "kettlebell swings", sets: 3, reps: 10 },
                { exercise: "Boxing", sets: 3, time: "3 min" },
            ],
        },
        {
            id: uuid(),
            name: "Workout 1",
            workout: [
                { exercise: "pushups", sets: 3, reps: 10 },
                { exercise: "kettlebell swings", sets: 3, reps: 10 },
                { exercise: "Boxing", sets: 3, time: "3 min" },
            ],
        }
    ],
    methods: {
        selectExercise: (selection) => {
            this.setState({
                currentExercise: this.state.exercises.find(
                    (item) => {
                        return item.id === selection.id;
                    },
                    () => console.log(this.currentExercise),
                ),
            });
        },

        addExercise: () => {
            this.setState(
                {
                    exercises: [...this.state.exercises, this.state.newExercise],
                    newExercise: {
                        id: uuid(),
                        name: "",
                    },
                },
                () => console.log(this.state.exercises),
            );
        },
        handleChange: (e) => {
            this.setState(
                {
                    newExercise: {
                        id: uuid(),
                        name: e.target.value,
                    },
                },
                () => {
                    console.log(this.state.newExercise);
                },
            );
        },
        deleteExercise: (selection) => {
            this.setState(
                {
                    exercises: this.state.exercises.filter((exercise) => {
                        if (exercise.id !== selection.id) {
                            return exercise;
                        } else {
                            return null;
                        }
                    }),
                },
                () => console.log(this.state.exercises),
            );
        },
        filterExercisesBy: (arg) => {
            console.log(arg);
        },
    }
};

const AppContext = React.createContext({});

export default AppContext;
