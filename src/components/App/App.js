// Modules
import React from 'react';
import { v4 as uuid } from 'uuid';
// Components
import { Header, ViewPanel, ViewToggle, Exercises } from '../../components/index.js';
// Material UI
import { Container } from "@material-ui/core";
// Context
import AppContext, { AppState } from "../context/context";



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
      currentExercise: AppState.exercises[0] ,
      currentView: <Exercises />,
      selectExercise: this.selectExercise

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
  createExercise = () => {
    this.setState({
      exercises: [...this.state.exercises, this.state.newExercise]
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
      exercises: this.state.exercises.filter(item => {
        if (item.id !== selection) {
          return item;
        } else {
          return null
        }
      })
    },
      () => console.log(this.state.exercises)
    );
  };
  /* VIEW METHODS */
  changeView = (e) => {
    const index = parseInt(e.currentTarget.getAttribute("index"));
    switch (index) {
      case 0:
        this.setState({
          currentView: <Exercises />
        });
        break;
      case 1:
        this.setState({
          currentView: "<Workouts />"
        });
        break;
      case 2:
        this.setState({
          currentView: "Programs"
        });
        break;
      default:
        this.setState({
          currentView: <Exercises />
        });
    };
  };
    render() {
      return (
        <AppContext.Provider value={this.state}>
          <Header />
          <Container>
            <ViewPanel />
          </Container>
          <ViewToggle />
        </AppContext.Provider>
      )
    }
  }


export default App;