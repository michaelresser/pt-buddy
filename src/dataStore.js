import { v4 as uuid } from 'uuid';


export const muscles = [
    'Chest', 'Back', 'Arms', 'Shoulders', 'Legs'
]

export const exercises = [
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
];


