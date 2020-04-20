// Modules
import React from 'react';
import { v4 as uuid } from 'uuid';
// Components
import { Header, ActionBar, Exercises } from '../../components/index.js';
// Material UI
import { Container } from "@material-ui/core";
// Local Data
import { muscles, exercises } from '../../dataStore';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      muscles: muscles,
      exercises: exercises,
      newExercise: {
        id: uuid(),
        name: ''
       },
      currentExercise: {}
    }
  }
  // CRUD methods
  selectExercise = (selection) => {
    this.setState({
      currentExercise: this.state.exercises.find((item) => {
        return item.id === selection.id;
      })
    });
  }
  addExercise = () => {
    /* if error handling logic === false */
    this.setState({
      exercises: [...this.state.exercises, this.state.newExercise]
    },
      () => console.log(this.state.exercises)
    );
  }
  handleChange = (e) => {
    this.setState({
      newExercise: {
        id: uuid(),
        name: e.target.value
      }
    },
      ()=> {console.log(this.state.newExercise)}
    );
  }
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
  }
  // editExercise = () => {};


  render() {
    return (
      <div>
        <Header />
        <Container>
          <ActionBar
            addNewExercise={this.addExercise}
            handleChange={this.handleChange} />
          <Exercises
            exercises={this.state.exercises}
            deleteExercise={this.deleteExercise}
            selectExercise={this.selectExercise}
            currentExercise={this.state.currentExercise}
          />
        </Container>

      </div>
    );
  }

}


export default App;