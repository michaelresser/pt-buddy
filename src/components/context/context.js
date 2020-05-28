import React from "react";
import { v4 as uuid } from "uuid";
import { Home, Exercises, Workouts, Programs } from '../index';



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
            name: "Programs",
            path: '/TrainingPlans',
            component: Programs,

        },

    ],
    exercises: [
        {
            id: uuid(),
            name: "Barbell Incline Chest Press",
            categories: ['Sports Performance', 'PowerLifting'],
            muscles: ["Triceps", "Chest", "Shoulders"],
            gear: "Barbell",
            movements: ["Upper Body Push"],
            level: "Intermediate",
            stance: "Supine",
            image: './images/exercises/barbell-incline-chest-press.jpg'
        },
        {
            id: uuid(),
            name: "Upward Dog Stretch",
            categories: ['Flexibility'],
            muscles: ["Neck", "Chest", "Core", "LPHC"],
            gear: "BodyWeight",            
            movements: ["upper Body Push"],
            level: "Beginner",
            stance: "Prone",
            image: './images/exercises/upward-dog-stretch.jpg'
        },
        {
            id: uuid(),
            name: "Mini-Band Squat",
            categories: ['Sports Performance', 'Functional Movement'],
            muscles: ["LPHC", "Legs", "Core"],
            gear: "Mini-Band",
            movement: ['Lower Body Push', "Lower Body Pull"],            
            level: "Beginner",
            stance: "Standing",
            image: './images/exercises/resistance-band-squatjpg.jpg'
        },
    ],
    workouts: [
        {
            id: uuid(),
            name: "Workout 1",
            workout: [ 
                {   exercise: /* exerciseId */ "JumpRope",
                    sets: 3, 
                    reps: 10 },
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
