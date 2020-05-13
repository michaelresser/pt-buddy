import App from './App/App';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ViewPanel from './Layout/Views/ViewPanel/ViewPanel';

import ExerciseTabs from './Layout/Views/ExerciseTabs/ExerciseTabs';
import Exercises from './Content/Exercises/Exercises/Exercises';
import ExerciseItem from './Content/Exercises/ExerciseItem/ExerciseItem';
import ExerciseList from './Content/Exercises/ExerciseList/ExerciseList';




/* import Workouts from './Content/Exercises/Exercises/Exercises';
import WorkoutList from './Content/Exercises/ExerciseList/ExerciseList';
import WorkoutView from './Content/Exercises/ExerciseTable/ExerciseTable'; */

import {AppContext, AppState} from './Context/Context';

export {
    App,
    AppContext, 
    AppState,
    Header,
    ViewPanel,
    ExerciseTabs,
    Exercises,
    ExerciseItem,
    ExerciseList,
 /*    Workouts,
    WorkoutActions,
    WorkoutList,
    WorkoutView, */
    Footer
}