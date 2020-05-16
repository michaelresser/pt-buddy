import App from './App/App';

/* Layout Components */
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ViewPanel from './Layout/Views/ViewPanel/ViewPanel';
// Home Section Components
import Home from './Content/Home/Home';
// Exercises Section Components
import ExerciseTabs from './Layout/Views/ExerciseTabs/ExerciseTabs';
import Exercises from './Content/Exercises/Exercises/Exercises';
import ExerciseItem from './Content/Exercises/ExerciseItem/ExerciseItem';
import ExerciseList from './Content/Exercises/ExerciseList/ExerciseList';

/* Workouts Section Components */
import Workouts from './Content/Workouts/Workouts/Workouts';

/* Training Plans Sectio Components */
import TrainingPlans from './Content/TrainingPlans/TrainingPlans.js';

/* Context */
import AppContext, {AppState} from './Context/Context';

export {
    App,
    AppContext, 
    AppState,
    Header,
    ViewPanel,
    Home,
    ExerciseTabs,
    Exercises,
    ExerciseItem,
    ExerciseList,
    Workouts,
    TrainingPlans,
    Footer
}