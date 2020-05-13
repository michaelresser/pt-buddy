// Modules
import React from 'react';
import { v4 as uuid } from 'uuid';
import { AppContext, AppState, Header, ViewPanel, Exercises, ExerciseItem, Footer } from '../../components/index.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: AppState.methods,
      exercises: AppState.exercises,
      newExercise: {
        id: uuid(),
        name: ''
      },
      /* App Methods */
      currentView: <Exercises />,
      changeMainView: this.changeMainView,

      /* Exercise Library*/
      exerciseFilters: ["All", "Muscles", "Gear", "Stance", "Focus", "Level"],
      currentExerciseFilter: 'All',
      getCurrentExerciseFilter: this.getCurrentExerciseFilter,
      changeExerciseFilter: this.changeExerciseFilter,
      handleChange: this.handleChange,
      selectExercise: this.selectExercise,
      addExercise: this.addExercise,
      deleteExercise: this.deleteExercise,
      filterExercises: this.filterExercises
    }
  };

  /* APP METHODS */
  changeMainView = (e) => {
    const index = parseInt(e.currentTarget.getAttribute("index"));
    console.log(index, typeof index);
    switch (index) {
      case 0:
        console.log(0);
        this.setState({
          currentView: <Exercises />
        });
        break;
      case 1:
        console.log(1);
        this.setState({
          currentView: "<Workouts />"
        });
        break;
      case 2:
        console.log(2);
        this.setState({
          currentView: "<Programs/>"
        });
        break;
      default:
        this.setState({
          currentView: <Exercises />
        });
    }
  };
  
  /* EXERCISE PAGE METHDOS */
  getCurrentExerciseFilter = (filter) => {
    this.setState({ currentExerciseFilter: filter }, () => console.log(this.state.currentExerciseFilter));
  }
  selectExercise = (selection) => {
    this.setState({
      currentExercise: this.state.exercises.find((item) => {
        return item.id === selection.id;
      },
        () => console.log(this.currentExercise))
    });
  };
  addExercise = () => {
    this.setState({
      exercises: [...this.state.exercises, this.state.newExercise],
      newExercise: {
        id: uuid(),
        name: ''
      }
    },
      () => console.log(this.state.exercises)
    );
  };
  handleChange = (e) => {
    this.setState({
      newExercise: {
        id: uuid(),
        name: e.target.value
      }
    },
      () => { console.log(this.state.newExercise) }
    );
  };
  deleteExercise = (selection) => {
    this.setState({
      exercises: this.state.exercises.filter(exercise => {
        if (exercise.id !== selection.id) {
          return exercise;
        } else {
          return null
        }
      })
    },
      () => console.log(this.state.exercises)
    );
  };

  filterBy = (arr, value) => {
    const filtered = arr.filter((item) => {
      if (Object.keys(item).contains(value)) {
        return item;
      }
    });
    return filtered.map((item) => (<ExerciseItem exercise={item} key={item.name} />))
  };




  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Header />
        <ViewPanel />
        <Footer />
      </AppContext.Provider>
    )
  }
}


export default App;