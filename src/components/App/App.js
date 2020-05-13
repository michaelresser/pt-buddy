// Modules
import React from 'react';
import { v4 as uuid } from 'uuid';
// Components
import { Header, ViewPanel, Exercises, Footer } from '../../components/index.js';
// Material UI
// import {  } from "@material-ui/core";
// Context
import AppContext, { AppState } from "../Context/Context";




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
      currentExercise: AppState.exercises[0],
      currentView: <Exercises />,
      handleChange: this.handleChange,
      selectExercise: this.selectExercise,
      addExercise: this.addExercise,
      deleteExercise: this.deleteExercise,
      changeView: this.changeView,
      filterExercisesBy: this.filterExercisesBy
    }
  }


  /* SELECT METHODS */
  selectExercise = (selection) => {
    this.setState({
      currentExercise: this.state.exercises.find((item) => {
        return item.id === selection.id;
      },
        () => console.log(this.currentExercise))
    });
  };
  /* CREATE METHODS */
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

  /* HANDLE METHODS */
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

  /* DELETE METHODS */
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
  /* FILTER EXERCISES by Categories */
  filterExercisesBy = (arg) => {
    console.log(arg)
  }



  /* VIEW METHODS */
  changeView = (e) => {
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